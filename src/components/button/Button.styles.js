import { StyleSheet } from "react-native";

const base_style=StyleSheet.create({
container:{
    margin:10,
    padding:7,
    borderRadius:7
},
title:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
}

});

export default{
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'#ffa040',
        },
        title:{
            ...base_style.title,
            color:'white'
        }
    }),

    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'white',

        },
        title:{
            ...base_style.title,
            color:'#ffa040'
        }
    })


}

