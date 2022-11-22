import React from "react";
import {Text,TouchableOpacity,ActivityIndicator} from "react-native";
import styles from './butonstyles';

const Button=({btnTitle,onPress,loading})=>{
    return(
      <TouchableOpacity style={styles.container} onPress={onPress} >
          {loading ?(<ActivityIndicator size={30} color='white'/>):
            (<Text style={styles.title}>{btnTitle}</Text>)}
      </TouchableOpacity>
      
    )
}

export default Button;
