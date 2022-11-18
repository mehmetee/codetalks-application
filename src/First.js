import React from "react";
import {View,Text,Button} from 'react-native';
import { useSelector,useDispatch } from "react-redux";


function First() {
const database=useSelector(veriler=>veriler.counter);
const dispatch=useDispatch()
function handleUpdate(){
    dispatch({type:'UPDATE_COUNTER'})
}
     return(
     <View style={{flex:1,backgroundColor:'#eceff1',}}>
      <Text style={{fontSize:30}}>First : {database}</Text>
      <Button title="Uodate " onPress={handleUpdate}/>
     </View>
    )
 }

 export default First;