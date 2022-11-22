import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Login from "./pages/Login/Login";
import { useSelector,useDispatch } from "react-redux";
import Loading from "./components/Loading/loading";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const Stack=createNativeStackNavigator();


function Router() {
   const dispatch=useDispatch()
   const useSession=useSelector(select=>select.user)
   const isAuthLoading =useSelector(select=>select.isAuthLoading)
     return(
        <NavigationContainer>

            { isAuthLoading ?( <Loading /> ) : !useSession ? ( 
            <Stack.Navigator>
               <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
            </Stack.Navigator>
            ) :(  
            <Stack.Navigator>
                  <Stack.Screen name="prodact" component={Products} options={{headerTitle:'Anasayfa',
                headerTitleAlign:"center",
                headerStyle:{backgroundColor:'#64b5f6'},
                headerTitleStyle:{color:'white'} ,
                headerRight:()=><Icon name="logout" size={30} color="white"
                onPress={()=>dispatch({type:'LOGOUT_USER'})}
                />
               }}/> 

                <Stack.Screen name="detail" component={Detail} options={{headerTitle:'Ürün Detayı',
                headerTitleAlign:"center",
                headerStyle:{backgroundColor:'#64b5f6'},
                headerTitleStyle:{color:'white'},
                headerTintColor :'white'         }} />
          </Stack.Navigator>
               )}
               
             
        </NavigationContainer>
    )
}
export default Router;
    