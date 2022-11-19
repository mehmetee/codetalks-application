import { StyleSheet,Dimensions} from "react-native";

const width=Dimensions.get('window').width/1
const height=Dimensions.get('window').height/2
export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:width,
        height:height,
        resizeMode:'contain',
        alignItems:'center',
        backgroundColor:'white'
    },
    title:{
        fontSize:19,
        padding:10,
        color:'black',
        fontWeight:'bold'
    },
    price:{
        padding:10,
        paddingTop:0,
        color:'black',
        fontSize:15
    },
    description:{
        padding:10,
        paddingTop:0,
        fontSize:15,
        fontStyle:'italic',
        
    },
})