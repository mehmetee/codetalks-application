import React from "react";
import { View,Text,ScrollView,TouchableOpacity,Image,Linking} from "react-native";
import Styles from './Details.style'
import Config from "react-native-config";
import useFetch from "../../Hooks/useFetch/useFetch";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
const Details=({route})=>{
    const {strMeal}= route.params;
    const {loading,error,datum}=useFetch(Config.API_URL+`/search.php?s=${strMeal}`)
    
    
    if (loading){
        return <Loading />
        }
        if (error){
            return<Error />
        }
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={Styles.container}>
           
            <Image source={{uri:datum.meals[0].strMealThumb}} style={Styles.image} />
            <View style={Styles.body_container}>
                <Text style={Styles.meal}>{datum.meals[0].strMeal} </Text>
                <Text style={Styles.area}>{datum.meals[0].strArea}</Text>
            </View>
            <Text style={Styles.instructions}>{datum.meals[0].strInstructions}</Text>
            <TouchableOpacity style={Styles.buton} 
            onPress={()=>Linking.openURL(datum.meals[0].strYoutube)}>
                <Text style={Styles.buton_Text}>Watch on Youtube</Text>
            </TouchableOpacity>
       
        </View>
        </ScrollView>
    )
}
export default Details;