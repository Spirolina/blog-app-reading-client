import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useGetAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_HOST}api/authors`)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                    setLoading(false);
                    return;
                }
                setAuthors(res.data.authors);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                throw err;
            })
    },[])

    return (
        {
            authors,
            loading,
            errors
        }
  )
}
