import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffb74d',
        padding:10
    },
    cellName:{
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ffffff',
        borderStyle:"dotted",
        fontSize:18,
        padding:16,
        borderRadius:15,
        fontWeight:'bold',
        color:'#ffffff'
    },

    headerBar:{
        flexDirection:'row',
        backgroundColor:'#f8f9fa',
        padding:7
    },
    headerTitle:{
        textAlign:'center',
        flex:0.7,
        alignSelf:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'#ffa040',
    },

    backButtonName:{
        alignSelf:'center',
        fontSize:20,
        color:'#ffa040'
    },
    backbutton:{
        flexDirection:'row',
    }
})