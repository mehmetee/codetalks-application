import React, { useCallback,useEffect,useState} from "react";
import { FlatList} from "react-native";
import useFetch from '../../Hooks/useFetch/';
import Config from "react-native-config";
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import JobsCard  from '../../components/jobCard';
import { useSelector } from "react-redux";

function Jobs({navigation}){
    const page=useSelector(x=>x.PAGES) 
    const [isrefreshing, setRefreshing] = useState(false);
    const {data,loading,error}=useFetch(`${Config.API_JOB_URL}?page=${page}`)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {setRefreshing(false)}),2000;
    }, []);
    function SelectDetail(id){navigation.navigate('Details',{id})}

    if (loading){ return <Loading />}
    if (error){return <Error />}

    const renderItem=({item})=><JobsCard datum={item} onSelect={()=>SelectDetail(item.id)}/>
   
    return(
         <FlatList  data={data.results} renderItem={renderItem}
         refreshing={isrefreshing}
         onRefresh={()=>onRefresh()}
         
        />
          )}
 
export default Jobs; 