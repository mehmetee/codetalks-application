import React from "react";
import {View,Text,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';


function Second() {
  const datalarj=useSelector(select=>select.counter);
   const likes=useDispatch();
   function handlenegative(){
    likes({type:'NEGATİVE'})
   }
     return(
     <View style={{flex:1}}>
      <Text style={{fontSize:30}}>Second : {datalarj}</Text>
      <Button title="düşürbakalım" onPress={handlenegative}/>
     </View>
    )
 }
 export default Second;