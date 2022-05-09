import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useSinglePost = () => {
    const [loading, setLoading] = useState(false);
    const [getStatus, setGetStatus] = useState(false);
    const [id, setId] = useState('');
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (getStatus && id) {
            setLoading(true);
            axios
                .get(`${process.env.REACT_APP_API_HOST}/api/dashboard/${id}`)
                .then(res => {
                    setPost(res.data.post);
                    setLoading(false);
                    setGetStatus(false);

                })
                .catch(err => {
                    setLoading(false);
                    setGetStatus(false);

                    throw err;
                })
        }
    },[getStatus])

    return {
        getPost: (id) => {
            setGetStatus(true);
            setId(id);
        },
        loading,
        post
        
  }
}
