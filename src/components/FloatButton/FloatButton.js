import React from "react";
import { TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

import Styles from './FloatButton.Styles';

function Button ({icon ,onPress}){
    return(
        <TouchableOpacity style={Styles.container} onPress={onPress}>
            <Icon name={icon} size={30} color='white'  />
        </TouchableOpacity>
    )
}

export default Button;