import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:15,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:Dimensions.get('window').height/3
    },
    modal:{
        justifyContent:'flex-end',
        margin:0
   },
   input_container:{
       flex:1,
   },
   Input:{
    fontSize:18,
    paddingLeft:18,
    color:'#37474f'
   }
})