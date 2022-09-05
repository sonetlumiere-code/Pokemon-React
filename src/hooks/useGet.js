import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useGet = (url) => {

    const [data, setData] = useState({
        loading: true,
        error: null,
        data: null
    });
    
    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        try {
            const res = await axios(url);    
            setData({
                loading: false,
                error: null,
                data: res.data
            });
            console.log(data)
        } catch (error) {
            setData({
                loading: false,
                error: error,
                data: null
            });
            console.log(error);
        }
    }

    return [data.data, data.loading, data.error]

}