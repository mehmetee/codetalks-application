import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./pages/auth/Login";
import Sign from "./pages/auth/sign";
import Cell from "./pages/cell-pages";
import Message from "./pages/messages";

const Stack=createNativeStackNavigator();

function Router(){
    const [session,setSession]=React.useState()
    React.useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
            setSession(!!user)
        })
    },[])

    function AuthStack(){
        return(<Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="LoginScreen" component={Login}/>
                <Stack.Screen name="SignScreen"  component={Sign} />
            </Stack.Navigator>)
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            { !session ?(
                <Stack.Screen name="AuthStack" component={AuthStack}/>
                ):(
                <>
                <Stack.Screen name="CellScreen"  component={Cell} 
                options={{headerShown:true, headerTitle:'Odalar' ,headerTintColor:'#ffa040' , headerTitleAlign:'center',
                headerRight:()=><Icon name="logout" size={30} color='#ffa040' onPress={()=>{auth().signOut()} }/>}}
                />
                <Stack.Screen  name="MessageScreen" component={Message}
                options={{headerShown:false,headerTintColor:'#ffa040',headerTitleAlign:'center',}}/>
                </>
                    )
            }
            </Stack.Navigator>
            <FlashMessage  position={"Top"}/>
        </NavigationContainer>
    )
}

export default Router;