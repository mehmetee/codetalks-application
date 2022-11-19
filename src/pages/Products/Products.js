import React from "react";
import { View,FlatList,Text} from "react-native";
import Loading from '../../components/Loading/loading'
import Error from "../../components/Error/Error";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../Hooks/useFetch/useFetch";

const URL ="https://fakestoreapi.com/products"

function Products({navigation}){
    const {loading,data,error}=useFetch(URL)

function handledetail(id){
    navigation.navigate('detail',{id})
}

    const renderProduct=({item})=>
    <ProductCard product={item} onSelect={()=>handledetail(item.id)}/>
    if(loading){
        return<Loading />
    }
    if(error){
        return <Error />
    }

    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <FlatList data={data} renderItem={renderProduct} />
            
        </View>
    )
};
export default Products;