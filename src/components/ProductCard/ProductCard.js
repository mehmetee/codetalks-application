import React from "react";
import { View,Text,Image, TouchableWithoutFeedback} from "react-native";
import styles from './Product.styles';
function ProductCard({product,onSelect}){
    return(
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.image}}/>
          <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>Ürünün fiyatı : {product.price} TL</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>  
    )
};
export default ProductCard;