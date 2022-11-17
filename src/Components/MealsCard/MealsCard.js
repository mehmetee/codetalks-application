import React from "react";
import { View,Text,ImageBackground,TouchableWithoutFeedback} from "react-native";
import styles from './MealsCard.styles';

function MealsCard({selectmeals ,onSelectDetail}){
    return(
        <TouchableWithoutFeedback onPress={onSelectDetail}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri:selectmeals.strMealThumb}}>
                 <View style={styles.body_container}>
                     <Text style={styles.title}>{selectmeals.strMeal}</Text>
                 </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;