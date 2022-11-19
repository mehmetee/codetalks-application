import React from "react";
import { View,Text,Image } from "react-native";
import useFetch from "../../Hooks/useFetch/useFetch";
import styles from './Detail.styles'
import Loading from '../../components/Loading/loading';
import Error from "../../components/Error/Error";
const URL ="https://fakestoreapi.com/products"
function Detail({route}){
    const {id}=route.params;
    console.log(id)
const {loading,error,data}=useFetch(`${URL}/${id}`);

if(loading){
    return<Loading />
}
if(error){
    return <Error />
}
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:data.image}}/>
            <Text  style={styles.title}>{data.title}</Text>
            <Text  style={styles.price}>Ürün Fiyatı : {data.price} TL</Text>
            <Text  style={styles.description}>{data.description}</Text>
            </View>
    )
};
export default Detail;