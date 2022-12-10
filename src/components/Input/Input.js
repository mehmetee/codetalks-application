import React  from "react";
import { View,TextInput, } from "react-native";

import styles from './Input.styles';

const Input =({placeholder,onChangeText,isSecure,value})=>{
    return(
        <View style={styles.container}>
            <TextInput  
            onChangeText={onChangeText}
            value={value}
            style={styles.input} 
            placeholder={placeholder} 
            placeholderTextColor="white" 
            secureTextEntry={isSecure}
            />
        </View>
    )
}

export default Input;