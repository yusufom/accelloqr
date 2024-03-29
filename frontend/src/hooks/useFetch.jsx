import axios from "axios";
import { useState, useEffect } from "react";


function useFetch(ref) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `/employees/${ref}/`
        const options = {
            method: 'GET',
            xstfCookieName: "csrftoken",
            xsrfHeaderName: "X-CSRFToken",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "csrftoken",
                "X-Requested-With": "XMLHttpRequest",
            },
        };
        const fetchData = async () => {
            setIsLoading(true);
    
            try {
                const response = await axios.request(options);
                setData(response.data);
                setIsLoading(false)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        fetchData()
    }, [ref]);

    function refetch() {
        setIsLoading(true);
        const url = `/employees/${ref}/`
        const options = {
            method: 'GET',
            xstfCookieName: "csrftoken",
            xsrfHeaderName: "X-CSRFToken",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "csrftoken",
                "X-Requested-With": "XMLHttpRequest",
            },
        };
        const fetchData = async () => {
            setIsLoading(true);
    
            try {
                const response = await axios.request(options);
                setData(response.data);
                setIsLoading(false)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }

    return { data, isLoading, error, refetch };


}

export default useFetch