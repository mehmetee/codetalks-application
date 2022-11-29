import React from "react";
import { SafeAreaView ,View,Text,TouchableWithoutFeedback} from "react-native";
import styles from "./styles";
function JobsCard({datum ,onSelect}){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{datum.name.length>30 ? datum.name.slice(0,35)+"...":datum.name}</Text>
                    <Text style={styles.company}>{datum.company.name}</Text>
                   <View style={styles.body_container}>
                    <Text style={styles.location}>{datum.locations[0].name}</Text>
                    </View>
                    <Text style={styles.level}>{datum.levels[0].name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default JobsCard;