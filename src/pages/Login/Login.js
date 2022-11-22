import React from "react";
import { View,SafeAreaView,Image, Alert, } from "react-native";
import styles from './Login.styles';
import Input from "../../components/inputContainer";
import Button from "../../components/ButtonContiner";
import { Formik } from "formik";
import usePost from '../../Hooks/usePost';
import Config from "react-native-config";
import { useDispatch } from "react-redux";
const Login=()=>{
    const {data,loading,error,post}=usePost()
    const dispatch=useDispatch()
    function handleLogin(value){
        post(Config.API_AUTH_URL +'login',value)
    }

   if(data){
        if(data.status==='Error'){Alert.alert('Dükkan' , 'Kullanıcı bulunamadı...')}
        else{
            dispatch({type:'SET_USER',pyload:{user}})
            }
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


const user =[ {
    id:1,
    email:'John@gmail.com',
    username:'johnd',
    password:'m38rmF$',
    name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },}]