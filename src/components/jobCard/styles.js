import { StyleSheet } from "react-native";

export default StyleSheet.create({
container:{ 
    flex:1,
    backgroundColor:'#eceff1',
    padding:10
},
inner_container:{
    padding:10,
    backgroundColor:'white',
    flex:1,
    borderWidth:2,
    borderColor:'#bdbdbd',
    borderRadius:8,
    minHeight:100,
},

company:{   
    fontSize:18,
    color:'black',
},
body_container:{
    flexDirection:"row",
    flex:1,
},

title:{
    color:'black',
    fontWeight:'bold',
    fontSize:20
},
level:{
    flex:1,
    textAlign:"right",
    fontSize:20,
    color:'#ef5350',
    fontWeight:'bold',
},
location:{
    backgroundColor:'#ef5350',
    fontSize:17,
    fontWeight:'bold',
    color:'white',
    paddingRight:10,
    paddingLeft:10,
    padding:6,
    borderRadius:20,
},

})