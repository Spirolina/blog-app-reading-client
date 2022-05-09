import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSinglePost } from '../../hooks/useSinglePost';
import './postview.css';
import parse from 'html-react-parser';
import { convert } from '../../helpers/dateFormatter';
import { Loading } from '../../components/loading/Loading';
import { Comment } from '../../components/comment/Comment';
import { useMakeComment } from '../../hooks/useMakeComment';
import { dateOrder } from '../../helpers/dateOrder';
import { Alert } from '../../components/alerts/Alert';

export const PostView = () => {
  const [commentor, setCommentor] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { makeComment, loadingComment, success, errors, lastComment, setErrors, setSuccess } = useMakeComment();
  const { getPost, loading, post } = useSinglePost()
  
  let { id } = useParams();
 
  useEffect(() => {
    if (id) getPost(id);
  }, [id])
  
  useEffect(() => {
    if(post)
    if (post.comments.length !== 0) {
      setComments(post.comments);
    }
  },[post])

  useEffect(() => {
    if (lastComment) {
      let myComments = [];
     
      if (comments) {
        myComments = [...comments];
      }
       
    myComments.push(lastComment);
      setComments(myComments);
      setComment('');
      setCommentor('');
    }
    
  }, [lastComment])
  
  const handleSubmit = () => {
    makeComment(commentor, comment, id);

  };
  const handleAlert = (index) => {
    if (index < 0) {
      setSuccess(false);
      return;
    }

    let myErrors = [...errors];
    myErrors.splice(index, 1);
    setErrors(myErrors);
    
  };

  if (loading) {
    return (
      <div className='post-view-container'>
            <Loading type='spin' color='#ff8a00' className='post-view-loading' />

            </div>
    )
  }
  if (post)
    return (
      <div className='post-view-container'>
        <div
          className='post-view'>
          <div className='post-view-title'> <h3>{post.title} </h3>  </div>
          <div className='post-view-body'> {parse(post.content)} </div>
          <div className='post-view-footer'> <span className='author'> {post.author.username} </span> <span className='date'> {convert(post.date)} </span> </div>
        </div>
        <div className='make-comment'>
          <div className='name-form'>
            <label className='name-label'> Name: </label>
            <input className='name-input' type='text' onChange={(e) => setCommentor(e.target.value)} value={commentor} placeholder='your name...' />
          </div>
          <div className='comment-form'>
            <label className='comment-label'> Comment: </label>
            <input className='comment-input' onChange={(e) => setComment(e.target.value)} type='text' value={comment} placeholder='your comment...' />
          </div>
          <button className='submit-comment' onClick={handleSubmit}> Submit </button>
          {loadingComment ? <Loading className='make-comment-loading' type='spin' color='#ff8a00' /> : null}

        </div>
        <div className='alert-container'>
          {success ? <Alert type='success' func={() => handleAlert(-1)} message='You successfully make a comment !' /> : null}
          {errors.length !== 0 ?
            errors.map((err, index) => <Alert type='error' func={() => handleAlert(index)} key={index} message={err.msg} id={index} />)
            : null}
        </div>
      
        <div className='comments'>
          {comments
            ? dateOrder(comments).map(comment => <Comment comment={comment} key={comment._id} />) : null}
        </div>
        
      </div>
    );
}
