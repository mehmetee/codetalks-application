import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

function Auth_Provider({children}){
    return(
        <Provider>{children}</Provider>
    )
}

export default Auth_Provider;