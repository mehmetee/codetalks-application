import React from "react";
import { View,TextInput } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './inputstyles';

const Input=({placeholder,onType,value ,isSecure,iconTitle})=>{
    return(
      
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value}   secureTextEntry={isSecure}
            />
            <Icon style={styles.icon} name={iconTitle} size={30}  />
        </View>
      
    )
}

export default Input;
