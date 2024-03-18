import { useEffect, useState } from "react"

export const UseFetch = (url) => {
  
    const [state,setState] = useState({
    data:null,
    isLoading:true,
    error:null
  });
  const fetchData = async(url,method,bodyData=null)=>{
    if (!url) return
    try {
        const options = {
          method:method,
          headers:{
            'Content-type':'application/json; charset=UTF-8',
          },
          body: method == "GET"||"DELETE"?null:JSON.stringify(bodyData)
        }
        const data = await fetch(url,options);
        const dataAccurate = await data.json();
        setState({
            data:dataAccurate,
            isLoading:false,
            error:null
        }); 
    } catch (error) {
        setState({
            data:null,
            isLoading:false,
            error
        });
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  

  const {data,isLoading,error} = state;
  return (
   {
    data,
    isLoading,
    error,
    fetchData
   }
  )
}
