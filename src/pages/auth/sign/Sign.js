import React  from "react";
import { SafeAreaView , View,Text} from "react-native";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";

import styles from './Sign.Styles';
import Input from "../../../components/Input";
import Button from "../../../components/button/Button";
import AuthErrorMessagesparser from "../../../utils/AuthErrorMessagesparser";

function Sign({navigation}){
    const [loading,setLoading]=React.useState(false)
    const handleCreateNewUser=async(formValues)=>{
        if(formValues.password != formValues.rePassword){
            showMessage({
                message:'parolalar uyuşmuyor...',
                type:'danger',
            })
            return;
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(
                formValues.userMail,
                formValues.password,
                formValues.rePassword,
            )
            setLoading(false)
            showMessage({
                message:'Hesap oluşturuldu.',
                type:'success',
            })
            navigation.navigate("LoginScreen")
        } catch (error) {
            showMessage({
                message:AuthErrorMessagesparser(error.code),
                type:'danger',
            })
            setLoading(false)
        }
    }

    const handleBackLogin=()=>{
        navigation.goBack()
    }
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.Logo_container}>
            <Text style={styles.Logo}>codetalks</Text>
        </View>
        <View style={styles.inner_container}>
            <Formik initialValues={{userMail:"", password:'',rePassword:""}} onSubmit={handleCreateNewUser}>
            { ({handleChange,handleSubmit,values}) =>(
                <>
                    <Input  
                    placeholder={" e-postanızı giriniz..."} 
                    onChangeText={handleChange('userMail')}
                    value={values.userMail}/>
                    <Input  
                    placeholder={"şifrenizi giriniz..."} 
                    isSecure
                    onChangeText={handleChange('password')}
                    value={values.password}/>
                    <Input  
                    placeholder={"şifrenizi tekrar giriniz..."}
                    isSecure
                    onChangeText={handleChange('rePassword')}
                    value={values.rePassword}/>
                    <Button title={'Kayıt ol'} onPress={handleSubmit} loading={loading}/>
                </>
            )}
            </Formik>
           <Button title={'Giriş yap'} thema={"secondary"} onPress={handleBackLogin} loading={loading} />
        </View>
    </SafeAreaView>
    )
}

export default Sign;