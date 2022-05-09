import React from 'react'
import '../author/author.css'

export const Author = ({author}) => {
  return (
      <div className='author'>
        <h3> {author.username} </h3>  
      </div>
  )
}
