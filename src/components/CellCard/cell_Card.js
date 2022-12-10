import React from "react";
import { View,Text,TouchableWithoutFeedback } from "react-native";

import styles from './cell_Card.styles'

function cell_Card({celltitle,onSelect}){
    return(
        <TouchableWithoutFeedback onPress={onSelect}>   
            <View style={styles.container} >
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{celltitle.cellTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default cell_Card;