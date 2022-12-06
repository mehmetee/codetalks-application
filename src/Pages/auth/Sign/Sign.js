import React,{useState} from "react";
import { SafeAreaView ,Text,View} from "react-native";
import styles from './SignStyles';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AuthErrorMessagesparser from "../../../utils/AuthErrorMessagesparser";

 const Sign=({navigation})=>{
    const [loading,setLoading]=useState(false);

    const handleLogin=()=>{ navigation.goBack()}

    
const handleSaveNewUser= async(newuserformvalues)=>{
    if (newuserformvalues.password !== newuserformvalues.rePassword){
        showMessage({
            message:'şifreler aynı değil !!',
            type:'danger'
        })
        return;
    }
    try {
        setLoading(true)
        await auth().createUserWithEmailAndPassword(
         newuserformvalues.userMail,
         newuserformvalues.password,
         newuserformvalues.rePassword,
         )
         showMessage({
            message:'üye kaydı başarılı.',
            type:'success'
        })
         setLoading(false)
         navigation.navigate('LoginScreen')
    } catch (error) {
        showMessage({
            message:AuthErrorMessagesparser(error.code),
            type:'danger'
        })
        setLoading(false);
    }
  
}

   return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Yazzz bee!!</Text>
        <View style={styles.inner_container}>
            <Formik initialValues={{userMail:'',password:'',rePassword:''}} onSubmit={handleSaveNewUser}>
            {({handleChange,handleSubmit,values})=>(   
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
                <Input 
                    placeholder={"Şifrenizi tekrar giriniz..."}
                    onChangeText={handleChange('rePassword')}
                    value={values.rePassword}
                    isSecure
                />
                <Button title={"Kayıt OL"} onPress={handleSubmit}/>
            </>)}
            </Formik>
            <Button title={"Giriş Yap"} thema={'scondary'} onPress={handleLogin}/>
        </View>
    </SafeAreaView>
   )
 }

 export default Sign;