import React from "react";
import Router from './Router';
import FavProvider from "./Context/Provider";

function Wrapper(){
    return(
        <FavProvider>
            <Router />
        </FavProvider>
    )
}

export default Wrapper;