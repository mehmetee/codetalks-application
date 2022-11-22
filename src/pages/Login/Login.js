import React from "react";
import { View,SafeAreaView,Image, Alert, } from "react-native";
import styles from './Login.styles';
import Input from "../../components/inputContainer";
import Button from "../../components/ButtonContiner";
import { Formik } from "formik";
import usePost from '../../Hooks/usePost';
import Config from "react-native-config";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login=({navigation})=>{
    const {data,loading,error,post}=usePost()

    function handleLogin(value){
        post(Config.API_AUTH_URL +'login',value)
    }

   if(data){
        if(data.status==='Error'){Alert.alert('Dükkan' , 'Kullanıcı bulunamadı...')}
        else{
            AsyncStorage.setItem('@USER',JSON.stringify(user=Config.API_USER_URL))
            navigation.navigate('prodact')}
   }
     if (error){
    Alert.alert('Dükkan', 'Bir hata oluştu...' )  }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/logo-logo.png')} />
            </View>
           <Formik initialValues={{username:'',password:''}} onSubmit={handleLogin}>
            {({handleSubmit,handleChange,values})=>(
                <View style={styles.body_container}>
                    <Input placeholder="Kullanıcı adını giriniz..." 
                    value={values.username}
                    onType={handleChange('username')}
                    iconTitle={'account'}

                   />
                    <Input placeholder='Şifrenizi giriniz...' 
                    value={values.password}
                    onType={handleChange('password')}
                    isSecure={true}
                    iconTitle={'key'}
                    />
                    
                    <Button btnTitle={"Giriş Yap"} onPress={handleSubmit} loading={loading}/>
                </View> )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;
