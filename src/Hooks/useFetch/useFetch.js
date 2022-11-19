import { useState,useEffect } from "react";
import axios from "axios";
const useFetch =(url)=>{
    const[loading,setLoading]=useState(true)
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);

    const fetchData=async()=>{
        try{
            const {data:response}=await axios.get(url)
                setData(response)
                setLoading(false)
        }
        catch(err){
            setLoading(false)
            setError(err.message)
        }
        }

        useEffect(()=>{
            fetchData();
        },[])
return {error,data,loading}
};

export default useFetch;