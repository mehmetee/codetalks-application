import React, { useState } from "react";
import { TextInput,View } from "react-native";
import Modal  from "react-native-modal";

import Button from '../../Button'
import styles from './ContentInputmodal.Styles'

function ContentInputmodal({visible,onClose,onSend}){
    const [text,setText]=useState('')
    
    function handleSend(){
        if(!text){
            return;
        }
        else{
            onSend(text)
            setText('');
        }
    }

    return (
        <Modal style={styles.modal}
        isVisible={visible}
        onBackButtonPress={onClose}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        swipeDirection='down'
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput 
                    placeholder={"Hadi yaktır bir sigara..."} 
                    onChangeText={setText}
                   multiline
                    />
                </View>
                <Button title={"Gönder"} onPress={handleSend} />
            </View>
        </Modal>
    )
}


export default ContentInputmodal;