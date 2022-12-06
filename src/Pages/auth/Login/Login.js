import React, { useState } from "react";
import {SafeAreaView,Text,View,} from "react-native";
import styles from './loginStyles';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authErrorMessagesparser from "../../../utils/AuthErrorMessagesparser";

 const Login=({navigation})=>{
    const [loading,setLoading]=useState(false);
    const handlegoSign=()=>{ navigation.navigate('SignScreen')}
     
  async  function handlegoLogin(formvalue){
      try {
          setLoading(true)
          await auth().signInWithEmailAndPassword(formvalue.userMail,formvalue.password)
            setLoading(false);
        } catch (error) {
           showMessage({
            message: authErrorMessagesparser(error.code),
            type:'danger',                
        })
            setLoading(false)
        }
    }
        
    return(
        
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Yazzz bee!!</Text>
            <View style={styles.inner_container}>
                <Formik initialValues={{userMail:'',password:''}} onSubmit={handlegoLogin} >
                    {({handleChange,values,handleSubmit})=>(
                        <>
                         <Input 
                         placeholder={"E-posta adresinizi giriniz..."}
                         onChangeText={handleChange('userMail')}
                         value={values.userMail}
                         />
                         <Input 
                         placeholder={"Şifrenizi  giriniz..."}
                         onChangeText={handleChange('password')}
                         value={values.password}
                         isSecure
                         />
                         <Button title={"Giriş Yap"} onPress={handleSubmit}  loading={loading}/>

                    </>
                    )}

                </Formik>
                <Button title={"Kayıt OL"} thema={'scondary'} onPress={handlegoSign}/>
            </View>
        </SafeAreaView>
           )
 }

 export default Login;