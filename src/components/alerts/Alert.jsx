import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import '../alerts/alert.css'


export const Alert = ({type, message, func}) => {
  return (
      <div className={'alert ' + type}>
          <div className="alert-body">
              <p>
                  {message}
              </p>
          </div>
        <span onClick={func} className='close-alert'> <AiFillCloseCircle  className='close-icon'/> </span>
      </div>
  )
}
