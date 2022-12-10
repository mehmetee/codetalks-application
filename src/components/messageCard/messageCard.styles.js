import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:13,
        backgroundColor:"#f8f9fa",
        marginVertical:13,
        borderRadius:13
    },

    inner_container:{
        flexDirection:'row'
    },

    name:{
        flex:1,
        fontSize:18,
        fontStyle:"italic",
        color:'#3b4a52'

    },

    date:{
        fontSize:15,
        fontStyle:"italic",
        alignSelf:'center',
        color:'#3b4a52'
    },
    
    description:{
        fontSize:23,
        fontStyle:"italic",
        marginTop:19,
        color:'#37474f',
        fontWeight:'bold'
    }
}) 