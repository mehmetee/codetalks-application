import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    contianer:{
        backgroundColor:'#00897b',
        margin:10,
        borderRadius:5,
        padding:7,
        flex:1
    },
    inner_container:{
        flexDirection:'row',
        paddingBottom:10,
        
        
    },

    user:{
        color:'white',
        fontSize:22,
        flex:1,
    
    },
    date:{
        alignItems:"center",
        fontSize:17,
        alignSelf:'center',
        color:'white',

    },
    title:{
        fontSize:20,
        paddingTop:5,
        paddingBottom:5,
        color:'white',
    },

    footer:{
        alignSelf:"flex-end",
        flex:1,
        backgroundColor:'white',
        borderRadius:14,
        padding:3
        
        
    },
    buton_container:{
        flexDirection:'row',
        marginRight:3
    },

    dislike_container:{
        backgroundColor:'#00897b',
        borderRadius:10,
        marginLeft:3,
        
        
     },

    dislike_counter:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',    
    },

    buton_title:{
        fontSize:17,
        textAlign:'center',
        color:'#00897b',
        fontWeight:'bold',
        marginLeft:5,
        
    }
    
})