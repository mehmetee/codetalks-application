import React from "react";
import { View,TextInput} from "react-native";
import styles from './Inputstyle';

function Input({placeholder,onChangeText,value,isSecure}){
    return(
   
        <View style={styles.container}>
            <TextInput 
            autoCapitalize="none"
            style={styles.input} 
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={isSecure}
             />
        </View>
   
    )
}

export default Input;