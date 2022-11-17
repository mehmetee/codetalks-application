import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffa500',
        padding:5
    },
    image:{ 
        minWidth:100,
        height:100,
        resizeMode:"contain",
        marginLeft:9
    },
    body_container:{
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:'white',
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#bdbdbd",
        borderTopRightRadius:7,
        borderBottomRightRadius:7,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50
      
    },
    title_container:{
        justifyContent:"center",
        marginLeft:10
    },
    title:{
        fontSize:20,
        fontStyle:'italic',
        color:'black'
    },
})