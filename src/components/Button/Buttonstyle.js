import { StyleSheet } from "react-native";

const base_style= StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:5,
        margin:10,
        borderRadius:12,
        padding:8,
        borderColor:'#eefff1',
        alignItems:"center"
    },
    container_button:{
        flexDirection:'row', 
        alignItems:"center",
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginLeft:5
    }
});
export default{
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"#00897b",
            borderColor:'#eefff1',
        },
        title:{
            ...base_style.title,
            color:'white'
        }
       
    }),

    scondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'white',
             borderColor:'#00897b'
        },
        title:{
            ...base_style.title,
            color:'#00897b',
           
        }
    
    })
}