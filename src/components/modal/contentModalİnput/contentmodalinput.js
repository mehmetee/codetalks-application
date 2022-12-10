import React, { useState } from "react";
import { View ,TextInput} from "react-native";
import  Modal  from "react-native-modal";

import styles from './modal.styles'
import Button from '../../button'

function ContentModalinput({visible,onClose,onSend,placeholder,butonTitle}){
    const [text,setText]=useState('');

    function handelSend(){
        if(!text){
            return;
        }
        else{
            onSend(text);
            setText('');
        }
    }

    return(
            <Modal 
            style={styles.modal }
            isVisible={visible}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection='down'
            >
            <View style={styles.container }>
                <View style={styles.input_container}>
                    <TextInput 
                    multiline
                    style={styles.Input}
                    placeholder={placeholder} 
                    onChangeText={setText}
                    />
                </View>
                <Button title={butonTitle} onPress={handelSend}/>
            </View>
            </Modal>
    )
}
export default ContentModalinput;