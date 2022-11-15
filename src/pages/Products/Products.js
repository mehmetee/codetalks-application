import React,{useState,useEffect} from "react";
import { View,Text,FlatList} from "react-native";
import axios from "axios";
function Products(){
    const [data,setData]=useState([]);
const URL ="https://fakestoreapi.com/products"
    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    const {data:proData}=await axios.get(URL)
        setData(proData)
    }
    const renderProduct=({item})=><Text >{item.title}</Text>
    return(
        <View>
            <FlatList data={data} renderItem={renderProduct} />
            
        </View>
    )
};
export default Products;