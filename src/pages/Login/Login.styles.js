import { StyleSheet,Dimensions } from "react-native";

const widthScreen=Dimensions.get('window').width;
const heigthScreen=Dimensions.get('window').height/3.5;
export default StyleSheet.create({
container :{
    flex:1,
    backgroundColor:'#64b5f6',
    justifyContent:"center"
},
    
logo_container :{
  flex:1,
  justifyContent:"center",
   

},
logo:{
    width:widthScreen,
    height:heigthScreen,
    resizeMode:'contain',
    tintColor:'white'
},
body_container :{
    flex:1.2
},

})