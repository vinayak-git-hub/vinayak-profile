import React from 'react'
import './home.css'
import { MdOutlineWavingHand } from "react-icons/md";
import img from '../../assets/headsup.png'

const Home = () => {
  return (
    <div className='main'>
      <div className='headsup'>
      <img src={img} alt="" />
      </div>
      <div className='main-content'>
        <h3 className='hi'>Hi <MdOutlineWavingHand style={{}}/>
        </h3>
        <br />
        <div className='hi'>
          <h1>
            I'm Vinayak,  
          </h1>
          <h4 className='last-line'>FullStack Developer.</h4>
        </div>
    </div>
    </div>
  )
}

export default Home