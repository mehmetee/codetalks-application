import React  from "react";
import { SafeAreaView , View,Text,} from "react-native";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import AuthErrorMessagesparser from "../../../utils/AuthErrorMessagesparser";
import Button from "../../../components/button/Button";
import Input from '../../../components/Input';
import styles from './login.styles'

function Login({navigation}){
    const [loading,setLoading]=React.useState(false)

    const handleLogins=async(formvalues)=>{
        if( formvalues.userMail==' '|| formvalues.password==' '){
            showMessage({
                message:'Bilgiler boş geçilemez...',
                type:'danger',
            })
            return;
        }
        try {
            setLoading(true)
             await auth().signInWithEmailAndPassword(
            formvalues.userMail,
            formvalues.password,)
            setLoading(false);
        } catch (error) {
            showMessage({
                message:AuthErrorMessagesparser(error.code),
                type:'danger',
            })
            setLoading(false)
        }
       
    }

    const handleGoSign=()=>{
        navigation.navigate('SignScreen')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.Logo_container}>
                <Text style={styles.Logo}>codetalks</Text>
            </View>
            <View style={styles.inner_container}>
                <Formik initialValues={{userMail:"", password:''}} onSubmit={handleLogins}>
                   {({handleChange,handleSubmit,values})=>(
                    <>
                        <Input 
                        placeholder={" e-postanızı giriniz..."} 
                        onChangeText={handleChange('userMail')}
                        value={values.userMail}
                        />
                        <Input  
                        placeholder={"şifrenizi giriniz..."} 
                        isSecure
                        onChangeText={handleChange("password")}
                        value={values.password}
                        />
                        <Button title={'Giriş yap'} onPress={handleSubmit} />
                    </> )}

                </Formik>
               <Button title={'Kayıt ol'} thema={"secondary"} onPress={handleGoSign}/>
            </View>
        </SafeAreaView>
    )
}

export default Login;