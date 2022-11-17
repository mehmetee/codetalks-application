import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Catagoris';
import Meals from './pages/Meals';
import Details from './pages/Details';
const Stack =createNativeStackNavigator();

function Router() {
     return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="CategoriesPage" component={Categories} />
            <Stack.Screen name="MealsPage" component={Meals} />
            <Stack.Screen name="DetailPage" component={Details} />
         </Stack.Navigator>
      </NavigationContainer> 
    )
}
export default Router;
    