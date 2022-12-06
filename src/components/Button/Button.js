import React from "react";
import { TouchableOpacity, View,Text,ActivityIndicator} from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Buttonstyle';

function Button({title, onPress,loading,icon,thema='primary'}){
    return(
    <TouchableOpacity style={styles[thema].container} 
    onPress={onPress} disabled={loading}>
      {loading ?(<ActivityIndicator color={"white"}/>) 
      : 
      (  <View style={styles[thema].container_button} >
            <Text style={styles[thema].title}>{title}</Text>
        </View>)
        }
    </TouchableOpacity>
    )
}

export default Button;