import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const usePosts = () => {
    const [loading, setLoading] = useState(false);
    const [getStatus, setGetStatus] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (getStatus) {
            setLoading(true);
            axios
                .get(`${process.env.REACT_APP_API_HOST}api/dashboard`)
                .then(res => {
                    setPosts(res.data.posts);
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
        getPosts: () => {
            setGetStatus(true);
        },
        loading,
        posts
        
  }
}
