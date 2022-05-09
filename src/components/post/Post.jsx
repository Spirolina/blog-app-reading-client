import React, { useState } from 'react'
import '../post/post.css'
import parse from 'html-react-parser'
import { convert } from '../../helpers/dateFormatter'
import { GrView } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';


export const Post = ({ post }) => {
    const [viewStyle, setViewStyle] = useState(null);
    const [postStyle, setPostStyle] = useState(null);
    let navigate = useNavigate()
  return (
      <div
          onMouseOver={() => {
              setViewStyle({
                  visibility: 'visible',
                  transform : "scale(1) translate(-50%, -50%)",
                  
              });
              setPostStyle({filter: "blur(5px)"})
          }}
          onMouseOut={() => {
              setViewStyle({
                  visibility: "hidden",
                  transform: "scale(0) translate(-50%, -50%)",
              });
              setPostStyle(null)

          }}
          onClick = {() => navigate(post._id)}
          className='post'>
          <div className='post-title'> <h3>{post.title} </h3>  </div>
          <div style={postStyle} className='post-body'> {parse(post.content.substring(0,100) + '...')} </div>
          <div className='post-footer'> <span className='author'> {post.author.username} </span> <span className='date'> {convert(post.date)} </span> </div>
          <GrView style={viewStyle} className='view' />
    </div>
    )
}
