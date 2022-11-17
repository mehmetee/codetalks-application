import {StyleSheet,Dimensions} from 'react-native';

const widthscreen=Dimensions.get('window').width/1.05
const heightscreen=Dimensions.get('window').height/4

export default StyleSheet.create({
container:{
    flex:1,
    padding:10,
    backgroundColor:'#ffa500',
    
},
image:{
    borderRadius:10,
    width:widthscreen,
    height:heightscreen,
    overflow:'scroll',
    
},
body_container:{
    flex:1,
    justifyContent:'flex-end',
},
title:{
    textAlign:'center',
    backgroundColor:'#00000999',
    fontSize:30,
    color:'white'
},
});