import React from 'react'
import '../home/home.css'

export const Home = () => {
  return (
      <div className='home'>
          <h1> Welcome to Blog App Reading!</h1>
          <p>
              You can read posts and make comments.
              Also you are able to see authors.
          </p>
          <div className='home-bg'></div>
      </div>
  )
}
