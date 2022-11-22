import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
function Auth_Provider({children}){
    const [user,setUser]=useState(null);
    const [isAuthLoading,setisAuthLoading]=useState(true);
    
    useEffect(()=>{
       
        AsyncStorage.getItem('@USER').then(
            userSessions=>{userSessions && setUser(JSON.parse(userSessions))
            setisAuthLoading(false)
            }
        )
        

    },[])
    const store=createStore(reducers,{isAuthLoading,user})
    return(
        <Provider store={store}>{children}</Provider>
    )
}

export default Auth_Provider;