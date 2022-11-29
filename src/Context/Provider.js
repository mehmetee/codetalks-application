import React from "react";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { legacy_createStore } from "redux";
import initialize from './store'
function FavProvider({children}){

    const store=legacy_createStore(reducers,initialize)
    return(
        <Provider store={store}>{children}</Provider>
    )
}

export default FavProvider;