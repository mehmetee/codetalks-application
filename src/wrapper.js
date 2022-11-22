import React from "react";
import Router from "./Router";
import AuthProvider from './Context/AuthProvider';


export default function (){
    return(
        <AuthProvider>
            <Router  />
        </AuthProvider>
    )
}