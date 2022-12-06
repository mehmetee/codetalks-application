import React from "react";
import { View,Text,FlatList} from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import FloatButton from '../../components/FloatButton/FloatButton';
import ContentInputmodal from "../../components/modal/ContentInputmodal";
import styles from './messagesStyle';
import MessageCard from "../../components/MessageCard/MessageCard";


function Messages(){
    const [InputModalisvisible,setInputModalisvisible]=React.useState(false)
    const [contentList,setcontentList]=React.useState([]);

    function parseContentData(data){
        return Object.keys(data).map(key=>{
            return{
                id:key,
                ...data[key],
            }
        }).sort(function(a,b){
            return a.date>b.date ? -1:a.date >b.date ?1:0
        })
    }
    React.useEffect(()=>{
        database().ref('messages/').on('value', snapshot => {
           const Parsedata =parseContentData(snapshot.val()|| {})
           setcontentList(Parsedata)
          });
    },[])

    

    function inputModalToggle(){
        setInputModalisvisible(!InputModalisvisible)
    }
    function handleSendContent(content){
        inputModalToggle()
        contentSendDatabase(content);
    }

    function contentSendDatabase(content){
        const userMail=auth().currentUser.email
       const contentObj ={
        text:content,
        user:userMail.split('@')[0],
        date:(new Date()).toISOString(),
        dislike:0,
       }
       database().ref('messages/').push(contentObj)
    }

    function handleLikes(item){
        database().ref(`messages/${item.id}`).update(
            {dislike:item.dislike + 1 }
        )
    }

    const renderItem=({item})=> <MessageCard messages={item} onLikes={()=>handleLikes(item)}/>
    return(
        <View style={styles.container}>
            <FlatList data={contentList} renderItem={renderItem}/>
            <FloatButton  icon={"plus"} onPress={inputModalToggle}/> 
            <ContentInputmodal
            visible={InputModalisvisible}
            onClose={inputModalToggle}
            onSend={handleSendContent} />
        </View>
    )
}

export default Messages;