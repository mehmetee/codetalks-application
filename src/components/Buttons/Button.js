import React from "react";
import { TouchableOpacity,View ,Text } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './butonStyles'
function Buttons({title,icon,onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.buton}>
            <View style={styles.container}>
                <Icon style={styles.icon} name={icon}  color="white"/>
                <Text style={styles.butonName}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Buttons;