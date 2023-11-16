import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchData = async ()=>{
            try {
                const response = await axios.get(url);
                setData(response.data.results);
                console.log(response.data.results);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, loading, error};
};

export default useFetch;