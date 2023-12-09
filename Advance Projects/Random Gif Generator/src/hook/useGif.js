import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

 const useGif = () => {
  
    const url = `https://api.giphy.com/v1/gifs/random?api_key=6I73JRAixjJWPK8dl0icY1ptiwDoK8P8&tag=&rating=g`;
    
    const [gif,setGif] = useState('');
    const[loading,setLoading] = useState(false);
    async function fetchData()
    {
        setLoading(true);
        
        const {data} = await axios.get(url);
        // const output = await response.json();
        // const ouput = await axios.request(url);
        // const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        // console.log(response);
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);

    }
    
    useEffect(()=>
    {
        fetchData();
    },[])
    

    return {gif,loading,fetchData};

}

export default useGif;
