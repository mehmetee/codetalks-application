import React from "react";
import { View,Text } from "react-native";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

import styles from './messageCard.styles';

function MessageCard({messages}){
    const formatDate=formatDistance(parseISO(messages.date) ,new Date(),{addSuffix: true,locale:tr} )
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.name}>{messages.userName}</Text>
                <Text style={styles.date}> {formatDate}</Text>
            </View>
            <Text style={styles.description}>{messages.message}</Text>
        </View>
    )
}

export default MessageCard;