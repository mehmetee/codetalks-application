import React from "react";
import { View,Text,SafeAreaView,Image,TouchableWithoutFeedback} from "react-native";
import styles from './style';

const CategoriesCard=({product,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <SafeAreaView style={styles.container}> 
                <View style={styles.body_container}>
                    <Image style={styles.image} source={{uri:product.strCategoryThumb}}/>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>{product.strCategory}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default CategoriesCard;