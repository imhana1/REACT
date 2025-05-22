import axios from 'axios';
import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(!url)
      return;
    axios.get(url).then(res=>setData(res.data)).catch(error=>setError(error)).finally(()=>setLoading(false));  
  }, [url]);

  return {data, loading, error};
}

export default useFetch