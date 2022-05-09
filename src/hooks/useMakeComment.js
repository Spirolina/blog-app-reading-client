import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useMakeComment = () => {
    const [commentor, setCommentor] = useState('');
    const [comment, setComment] = useState('');
    const [postId, setPostId] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [applyStatus, setApplyStatus] = useState(false);
    const [lastComment, setLastComment] = useState(null);

    useEffect(() => {
        if ( applyStatus ) {
            setLoading(true);
            axios
                .post(`${process.env.REACT_APP_API_HOST}api/dashboard/${postId}`, {
                    commentor,
                    content: comment
                })
                .then(res => {
                    if (res.data.errors) {
                        setErrors(res.data.errors);
                        setLoading(false);
                        setApplyStatus(false);
                        return;
                    }
                    setLoading(false);
                    setSuccess(true);
                    setApplyStatus(false);
                    setLastComment(res.data.post.comments.slice(-1)[0]);

                })
                .catch(err => {
                    setLoading(false);
                    setApplyStatus(false);

                    throw err;
                })
        }
        
    },[applyStatus])
  
    return {
        makeComment: (commentor, comment, postId) => {
            setCommentor(commentor);
            setComment(comment);
            setPostId(postId)
            setApplyStatus(true);
            setSuccess(false);
            setErrors([]);
        },
        loadingComment: loading,
        success,
        errors,
        lastComment,
        setErrors,
        setSuccess
    }
}
