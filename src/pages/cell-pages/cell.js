import React, { useEffect, useState } from "react";
import { View , FlatList } from "react-native";
import FloatButton from "../../components/FloatButton/floatButton";
import ContentModalinput from "../../components/modal/contentModalİnput";
import database from '@react-native-firebase/database';

import Cellcard from "../../components/CellCard/cell_Card";
import styles from './cell.styles'

function CellPages({navigation}){
    const [inputModalvisible,setInputModalvisible]=useState(false)
    const [cellContentList,setCellContentList]=useState([]);

    function parseCellData(data){
      return Object.keys(data).map(key=>{
        return{
            id:key,
            ...data[key],}
      })
      }
       
      useEffect(()=>{
        database()
        .ref(`/cell_home/`).on('value', snapshot=>{
          const  parseData=parseCellData(snapshot.val() || { })
          setCellContentList(parseData)
        })
      },[])
   const handleModalToggl=()=>{
        setInputModalvisible(!inputModalvisible)
   }

   const handleCreateNewCell=(cellContent)=>{
        handleModalToggl();
        handleCellSend(cellContent);  
   }

   const handleCellSend =(cellContent)=>{
        const cellObject={
            cellTitle:cellContent,
        }
        database().ref(`/cell_home/` ).push(cellObject)
   }

   const handleSignMessags=(item)=>{
       navigation.navigate('MessageScreen',{item})
    }
    const renderCell=({item})=><Cellcard celltitle={item} onSelect={()=>handleSignMessags(item)}/>;
    return(
        <View style={styles.container}>
            <FlatList 
            data={ cellContentList } 
            renderItem={renderCell}
            numColumns={'2'}
            />

            <FloatButton icon={'plus'} onPress={handleModalToggl}/>
            <ContentModalinput 
            placeholder={'oda adı...'}
            onSend={handleCreateNewCell}
            visible={inputModalvisible}
            onClose={handleModalToggl}
            butonTitle='Oda ekle'
            />
        </View>
    )
}

export default CellPages;