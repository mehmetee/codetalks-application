import { Dimensions, StyleSheet } from "react-native";

const devicesize=Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:15,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:devicesize.height/3,
       
    },
    modal:{
         justifyContent:'flex-end',
         margin:0
    },
    input_container:{
        flex:1,
    }
})