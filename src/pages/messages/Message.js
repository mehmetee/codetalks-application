import React, { useEffect, useState } from "react";
import { View,Text, FlatList, StatusBar,SafeAreaView,ScrollView} from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

import ModalInput from '../../components/modal/contentModalİnput';
import FloatButton from '../../components/FloatButton'
import styles from './message.styles'
import MessageCard from '../../components/messageCard'

function Message({route,navigation}){
    const {item}=route.params;
    const [contentisVisible,setcontentisVisible]=useState(false);
    const [contentList,setContentList]=useState([])


    const parseMessageData=(data)=>{
        return Object.keys(data).map(key=>{
            return{
                id:key,
                ...data[key],
            }
        }).sort(function(a,b){
            return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1:0);
         })
     }

    useEffect(()=>{
        database().ref(`/cell_home/${item.id}/${item.cellTitle}`)
        .on('value',snapShot=>{
            const parseMessage=parseMessageData(snapShot.val() || {})
            setContentList(parseMessage)
        })
    },[])

    const handleModalInputToggle=()=>{
        setcontentisVisible(!contentisVisible);
    }
    const handleSendMessageContent=(content)=>{
        handleModalInputToggle();
        handelMessageContent(content)
    }
    const handelMessageContent=(content)=>{
        const userMail=auth().currentUser.email
        const ContentObject={
            message:content,
            userName:userMail.split('@')[0],
            date:(new Date()).toISOString(),
        }
        database().ref(`/cell_home/${item.id}/${item.cellTitle}`).push(ContentObject)
    }

    const gobackcell=()=>{
        navigation.navigate('CellScreen')
    }
    const renderMessage=({item})=><MessageCard messages={item}/>
    return(
        <SafeAreaView style={{flex:1}}>
            <StatusBar backgroundColor='#ffb04a'/>
            <View style={styles.headerBar}>
                <View style={styles.backbutton}>
                    <Icon name="chevron-left" size={40} color='#ffa040'onPress={gobackcell}/>
                    <Text style={styles.backButtonName}>Odalar</Text>
                </View>
                <Text style={styles.headerTitle}>{item.cellTitle}</Text>
            </View>
            <View style={styles.container}>
                   
                <FlatList 
                 ListHeaderComponent={()=>( <Text style={styles.cellName}>{item.cellTitle} odası kuruldu !!!</Text>)}
                data={contentList} renderItem={renderMessage} />

                <FloatButton icon={'plus'} onPress={handleModalInputToggle}/>
                <ModalInput 
                visible={contentisVisible}
                onClose={handleModalInputToggle}
                placeholder={'Mesaj...'}
                onSend={handleSendMessageContent}
                butonTitle='Gönder'
                />
            </View>
        </SafeAreaView>
    )
}

export default Message;