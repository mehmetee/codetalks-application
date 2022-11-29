import { StyleSheet,Dimensions } from "react-native";

const widthh=Dimensions.get('window').width/1.15;
const heightt=Dimensions.get('window').height/16;
export default StyleSheet.create({
buton:{
    backgroundColor:'#ef5350',
    margin:5,
    height:heightt,
    width:widthh,
    alignItems:'center',
    borderRadius:8,
    flex:1
},
container:{
    flexDirection:'row',
    flex:1,
    alignItems:'center'
},
icon:{
    fontSize:22,
    marginRight:8
},
butonName:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'
},
})