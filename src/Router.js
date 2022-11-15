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
                <Stack.Screen name="prodact" component={Products} />
                <Stack.Screen name="detail" component={Detail} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;
    