import axios from "axios";
import { useState ,useEffect } from "react";


function useFetch(url){
    const [loading,setLoading]=useState(false);
    const [error, setError]=useState('');
    const [data,setData]=useState([]);
    
    const gett=async()=>{
        try {
            setLoading(true)
            const {data:response}=await axios.get(url)
            setData(response);
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
    useEffect((data)=>{
        gett(data)},[])
    
    return{loading,error,data};
}

export default useFetch;