import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from './pages/Products/Products'
import Detail from './pages/Detail/Detail'
const Stack=createNativeStackNavigator();


function Router() {
     return(
        <NavigationContainer>
             <Stack.Navigator>
                <Stack.Screen name="prodact" component={Products} options={{headerTitle:'Anasayfa',
                headerTitleAlign:"center",
                headerStyle:{backgroundColor:'#64b5f6'},
                headerTitleStyle:{color:'white'} 
               
               }}/>
                <Stack.Screen name="detail" component={Detail} options={{headerTitle:'Ürün Detayı',
                headerTitleAlign:"center",
                headerStyle:{backgroundColor:'#64b5f6'},
                headerTitleStyle:{color:'white'},
                headerTintColor :'white'         
                }} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;
    