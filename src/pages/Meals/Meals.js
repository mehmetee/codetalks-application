import React from "react";
import {FlatList,Text } from "react-native";
import Config from "react-native-config";
import useFetch from "../../Hooks/useFetch/useFetch";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import MealsCard from "../../Components/MealsCard/MealsCard";
const Meals=({route,navigation})=>{
    const {strCategory}=route.params;
    const {datum,loading,error}=useFetch(Config.API_URL+`/filter.php?c=${strCategory}`);
const selectDetail=(strMeal)=>{
    navigation.navigate('DetailPage',{strMeal});
}

    if (loading){
        return <Loading />
        }
        if (error){
            return<Error />
        }
    const  renderfetchmeals=({item})=>
    <MealsCard selectmeals={item} onSelectDetail={()=>selectDetail(item.strMeal)}/>
    return(
      <FlatList
      data={datum.meals} 
      renderItem={renderfetchmeals}/>
    )
}
export default Meals;