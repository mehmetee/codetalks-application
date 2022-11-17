import React from "react";
import {FlatList } from "react-native";
import Config from "react-native-config";
import CategoriCard from "../../Components/CategoriesCard/CategoriesCard";
import Loading from "../../Components/Loading/Loading";
import Error from '../../Components/Error/Error'
import useFetch from "../../Hooks/useFetch/useFetch";
const Categories=({navigation})=>{
   const {datum,loading,error}=useFetch(Config.API_URL+'/categories.php')

if (loading){
return <Loading />
}
if (error){
    return<Error />
}

function onSelectmeals(strCategory){
    navigation.navigate('MealsPage',{strCategory})
}

    const renderitemSelct=({item}) =>
    <CategoriCard product={item} onSelect={()=>onSelectmeals(item.strCategory)}/>
    return(
       <FlatList data={datum.categories} renderItem={renderitemSelct}/>
    )
}
export default Categories;