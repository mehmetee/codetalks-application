import React from "react";
import { TouchableOpacity, } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './floatbuton.styles'

function FloatButton({icon,onPress}){
    return(
        <TouchableOpacity style={styles.container } onPress={onPress}>
            <Icon name={icon} size={30} color='white' />
        </TouchableOpacity>
    )
}

export default FloatButton;