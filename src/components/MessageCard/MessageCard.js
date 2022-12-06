import React from "react";
import {View,Text,TouchableOpacity } from "react-native";
import styles from './messageStyles';
import { formatDistance,parseISO } from "date-fns";
import { tr } from "date-fns/locale";


function MessageCard({messages,onLikes}){
    const formattedDate=formatDistance(parseISO(messages.date), new Date(), { addSuffix: true ,locale:tr})
 
    return(
     <View style={styles.contianer}>
        <View style={styles.inner_container}>
            <Text style={styles.user}>{messages.user}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
            <Text style={styles.title}>{messages.text}</Text>

            <View  style={styles.footer}>
                 <TouchableOpacity  style={styles.buton_container} onPress={onLikes} >
                  {!!messages.dislike && (   
                    <View style={styles.dislike_container}>
                        <Text style={styles.dislike_counter}>{messages.dislike}</Text>
                    </View>
                    )}
                    <Text style={styles.buton_title}>Likes</Text>
                 </TouchableOpacity>
            </View>
     </View>
    )
}

export default MessageCard;