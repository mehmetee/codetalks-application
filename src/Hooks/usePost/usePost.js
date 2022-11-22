import { useState } from "react";
import axios from "axios";

const usePost=()=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    async function post(url,Apidata){
      try {
        setLoading(true);
        const {data:response}=await axios.post(url,Apidata);
        setData(response);
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
return{data,loading,error,post}
}

export default usePost;
