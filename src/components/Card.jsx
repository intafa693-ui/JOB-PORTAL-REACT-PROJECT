import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    
      <>
    <div className='card'>
      <div className='head'>
        <img src={props.url} alt="Logo" />

        <div className='save-icon'>
        <p>Save </p>
        <Bookmark width="20" height="20"/>
        </div>

      </div>

      <div>
        <div className='text'>
        <h3>{props.company}</h3>
        <p>{props.time}</p>
         </div>
        <h3 id="UI">{props.role}</h3>
       
        <div className='para'>
          <p>{props.partTime}</p>
          <p>{props.fullTime}</p>
        </div>
      </div>
      
      <div className='footer'>
        <div className='footer-text'>
        <h3>{props.amount}</h3>
        <p>{props.location}</p>
        </div>
        <div className='btn'>
          <button>Apply Now</button>
        </div>
      </div>

      </div>
    </>
  )
}

export default Card
