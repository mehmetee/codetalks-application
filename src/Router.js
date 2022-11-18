import React from "react";
import {SafeAreaView,} from 'react-native';
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Second from "./Second";
import First from "./First";

const initialize={
   counter:0,
}
function reducers(state,action){
   switch (action.type) {
      case 'UPDATE_COUNTER':
         return{...state,counter:state.counter+2}
      case 'NEGATİVE':
         return {...state,counter:state.counter-3*2}
      default:
         return state;
   }
}

function Router() {
     return(
   <Provider store={legacy_createStore(reducers,initialize)}>
      <SafeAreaView style={{flex:1,}}>
          <First />
          <Second />
      </SafeAreaView>
   </Provider>
    )
}
export default Router;
   


