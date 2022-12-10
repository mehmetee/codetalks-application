import React from "react";
import { TouchableOpacity,Text,ActivityIndicator} from "react-native";


import styles from './Button.styles';

function Button ({title,onPress,thema="primary",loading}){
    return(
        <TouchableOpacity  onPress={onPress}  style={styles[thema].container} 
        loading={loading} disabled={loading}>
            {loading? (<ActivityIndicator color="white"/>):(
            <Text style={styles[thema].title}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}

export default Button;