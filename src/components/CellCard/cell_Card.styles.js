import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
container:{
    margin:10,
    flex:1,
    height:Dimensions.get('window').height/4,
    borderWidth:3,
    borderColor:'#eceff1',
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:13
},

inner_container:{

},

title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ffa040'
},

})