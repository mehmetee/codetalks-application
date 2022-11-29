import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from './Pages/Jobs';
import Favorited from './Pages/Favorited'
import Detail from "./Pages/Job_Detail/Detail";
import useFetch from "./Hooks/useFetch";
import Loading from "./components/Loading/Loading";
import Config from "react-native-config";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function FavorijobStack(){
     const dispatch=useDispatch()
     return(
         <Drawer.Navigator>
           <Drawer.Screen name="Jobs" component={Jobs}  
                options={{headerTitle:'Jobs',headerTitleAlign:"center",
                headerTintColor:'red',drawerActiveTintColor:'#ef5350',
                headerRight:()=><Icon name="logout" size={30} color="red"
                onPress={()=>dispatch({type:'SELECT_PAGES'})}  />}}/>

            <Drawer.Screen name="Favoriler" component={Favorited} 
                options={{headerTitle:'Favoriler',headerTitleAlign:"center",
                headerTintColor:'red', drawerActiveTintColor:'#ef5350'}} />
        </Drawer.Navigator>
    )
 }


function Router(){
  

    const{loading}=useFetch()

    return(
        <NavigationContainer>
       {  loading ?
         (<Loading />):
                 
           ( <Stack.Navigator >
                <Stack.Screen name="Dreawernavigator" component={FavorijobStack} 
                options={{headerShown:false}} />

                <Stack.Screen name="Details" component={Detail} 
                 options={{headerTitleAlign:"center",
                 headerTintColor:'#ef5350', }} />
              
            </Stack.Navigator>)}
        </NavigationContainer>
    )
}


export default Router;