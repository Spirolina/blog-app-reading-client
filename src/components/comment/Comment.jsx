import React from 'react'
import { convert } from '../../helpers/dateFormatter';
import '../comment/comment.css'

export const Comment = ({comment}) => {
  return (
    <div className='comment'>
      <div className='comment-author'>
        <h3> {comment.name} </h3> 
      </div>
      <div className='comment-body'>
        <p>
        {comment.content}
        </p>  
      </div>
      <div className='comment-footer'>
        <span className='comment-date'>
        {convert(comment.date)}
        </span> 
      </div>
    </div>
  );
}
