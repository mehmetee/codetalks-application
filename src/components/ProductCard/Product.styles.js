import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:8,
        backgroundColor:'#e5e5e5',
        borderColor:'#bdbdbd',
        borderWidth:1,
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:"contain",
        backgroundColor:'white'
    },
    body_container:{
        flex:1,
        padding:10,
        justifyContent:'space-between'
    },
    title:{
        fontSize:17,
        color:'black',
        fontWeight:'bold'
    },
    price:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'right',
    }
})