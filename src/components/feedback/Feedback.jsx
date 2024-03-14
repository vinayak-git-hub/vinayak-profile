import React from 'react'
import './Feedback.css'
import { Button } from 'react-bootstrap'

const Feedback = () => {

  return (
    <div className='feed'>
       <div>
       <input className='ip-user' type="text" placeholder='type name or email'/>
       <input className='ip-feed' type="text" placeholder='write feedback'/>
       <Button disabled>Submit</Button>
       </div>
    </div>
  )
}

export default Feedback