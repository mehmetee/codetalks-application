import {StyleSheet,Dimensions} from 'react-native';

const windows=Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        margin:11,
   
    },
    image:{
        width:windows.width/1.07,
        height:windows.height/2.2,
        
    },
   body_container:{
       borderBottomWidth:3,
       padding:5,
       borderColor:'#bdbdbd'
    },
    meal:{
        color:'#a52a2a',
        fontSize:26,
        fontWeight:'900'
    },
    area:{
        color:'#a52a2a',
        fontSize:20,
        fontWeight:'600'
    },
    instructions:{
        fontSize:16.5,
        color:'#252525',
        fontWeight:'600'
    },
    buton:{
        backgroundColor:'red',
        margin:8,
        marginTop:17,
        borderRadius:5
    },
    buton_Text:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        padding:5,
    },
})