import axios from "axios";
import { useState, useEffect } from "react";
import {RAPID_API_KEY} from '@env'

const paidApiKey = RAPID_API_KEY
console.log(paidApiKey)
const useFetch = (endpoint, query) =>{

    const [data,setData] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const [error,setError] = useState(null);

    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': paidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    console.log('01',RAPID_API_KEY)
    
    const fetchData = async () => {
        setIsloading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsloading(false);
        } catch (error) {
            setError(error)
            alert('Failed')
        } finally {
            setIsloading(false);
        }
    }

    useEffect(()=>{fetchData()},[])

    const refetch = () => {
        setIsloading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;