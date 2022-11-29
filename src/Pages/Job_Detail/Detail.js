import React from "react";
import { SafeAreaView ,Text,useWindowDimensions,View,ScrollView, Alert} from "react-native";
import Config from "react-native-config";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import styles from "./Detail_styles";
import RenderHTML from "react-native-render-html";
import Buttons from "../../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
function Detail({route}){
    const {id}=route.params;
    const {data,loading,error}=useFetch(`${Config.API_JOB_URL}/${id}`)
    const dispatch=useDispatch();
    const FavoriJob=useSelector(fav=>fav.FavoriJob)
    const {width}=useWindowDimensions()


    if (loading){
       return <Loading />
    }
    
    if (error){
      return  <Error />
    }

    const isAddedFav= id=>FavoriJob.some(s=>s.id===id)
    function handleFavori(favori){
         if (FavoriJob.length > 0 && isAddedFav(favori.id)){
             Alert.alert("Job was already added!")
         }
         else{
             dispatch({type:'FAVORI_ADD' ,pyload:{favori}})
             Alert.alert("Job succesfully added!")
         }
    }
    const handleSubmit = () => {
        Alert.alert("Thanks, Succesfully Submited!")
    }
   


    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.name}</Text>

                    <Text style={styles.locations}>Locations :
                        <Text style={styles.locationsName}> {data.locations && data.locations.length>0 ? data.locations[0].name:'location not found'}</Text> </Text>

                    <Text style={styles.Level}>Job Level : 
                        <Text style={styles.levelName}> {data.levels && data.levels.length >0 ? data.levels[0].name :'Unknown level'}</Text></Text>

                    <Text style={styles.JobDetail}>Job Detail</Text>

                    <View style={styles.innerContainer}>
                    <RenderHTML source={{html:`${data.contents}`}} contentWidth={width}></RenderHTML>
                    </View>

                    <View style={styles.butonContainer}>
                    <Buttons title={"Submit"} icon={"login"}  onPress={handleSubmit}/>
                    <Buttons title={"Favorite Job"} icon={"heart-multiple"} onPress={()=>handleFavori(data)}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Detail;