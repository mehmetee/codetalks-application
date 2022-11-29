import React from "react";
import {FlatList} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Favoricard from '../../components/favoriCard/favoriCard'

function Favorited({navigation}){
    const jobfavori=useSelector(select=>select.FavoriJob);
    const dispatch=useDispatch();
    const Remove = (id) => {
      dispatch({type:"REMOVE_FAVORİ",payload:{id}})
  }
    const detailPage=(id)=>{
      navigation.navigate("Details",{id})
    }


    const renderItem=({item})=>(
    <Favoricard datum={item} onselect={()=>Remove(item.id)} onPress={()=>detailPage(item.id)} />)
 
    return(
      <FlatList
      keyExtractor={(item) => item.id}
      data={jobfavori}
      renderItem={renderItem} />

    )
}

export default Favorited;