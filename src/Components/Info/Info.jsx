import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';
import { SlCalender } from "react-icons/sl";

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2  data-aos="fade-right" data-aos-duration="4000">Travel to make memories all around the world</h2>
          <button  data-aos="fade-left" data-aos-duration="4000" className='btn'>
            View All
          </button>
        </div>

        <div className="cardsDiv grid">

          <div  data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv flex ">
              <SlCalender className="icon"></SlCalender>
            </div>
            <span className="cardTitle">
              Book & Relax
            </span>
            <p>You can also call airlines from your phone and book 
              a flight ticket!
            </p>
          </div>

          <div  data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon"></BsShieldCheck>
            </div>
            <span className="cardTitle">
              Smart Checklist
            </span>
            <p>You can also call airlines from your phone and book 
              a flight ticket!
            </p>
          </div>

          <div  data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon"></BsBookmarkCheck>
            </div>
            <span className="cardTitle">
              Book & Relax
            </span>
            <p>You can also call airlines from your phone and book 
              a flight ticket!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Info