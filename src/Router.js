import React, { useState } from "react";
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth'


import Messages from './Pages/Messages'
import Login from './Pages/auth/Login';
import Sign from './Pages/auth/Sign';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
const Stack=createNativeStackNavigator();
function App(){
    const [userSession,setUserSession]=useState()

    React.useEffect((user)=>{
        auth().onAuthStateChanged((user)=>{
            setUserSession(!!user)
        })
    },[])

    const AuthStack=()=>{
        return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="SignScreen" component={Sign} />
        </Stack.Navigator>)
       
    }
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {!userSession ?(
           <Stack.Screen name="AuthStack" component={AuthStack}/>
           ):(
            <Stack.Screen name="messageScreen" component={Messages} 
            options={{headerShown:true,title:'Zaman tüneli',headerTitleAlign:'center',
        headerTintColor:'#00897b',headerRight:()=>
    <Icon name="logout" size={30} color='#00897b' onPress={()=>{auth().signOut();}}/> 
    }} />)}
        </Stack.Navigator>
        <FlashMessage position="top" />
    </NavigationContainer>
    )
}

export default App;