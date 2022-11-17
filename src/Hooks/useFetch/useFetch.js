import {useState,useEffect} from "react";
import axios from "axios";

function useFetch(url){
    const [datum,setDatum]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    async function FetchData(){
        try{
        const {data:fetch}=await axios.get(url)
        setDatum(fetch) 
        setLoading(false)   
    }
    catch(err){
        setError(err.message);
        setLoading(false);
    }

}

useEffect(()=>{
    FetchData();
},[])
    return {datum,loading,error}
}

export default useFetch;