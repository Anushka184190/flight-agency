import React from 'react';
import gridImg from "../../assests/grid-img.png"
const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionConatiner">

        <div className="titlesDiv">
          <small>
            travel support
          </small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to 
            expect along the journey!
          </p>
        </div>

        <div className="infoDiv grid">
            <div className="textDiv grid">


              <div className="singleInfo"   data-aos="fade-down" data-aos-duration="4000">
                <span className='number'>01</span>
                <h4>
                  travel requiremenets for Dubai
                </h4>
                <p>Find help with booking and travel plans, see what
                  to expect along the journey to your favourite destinations!
                </p>
              </div>

              <div className="singleInfo"   data-aos="fade-down" data-aos-duration="4000">
                <span className='number colorOne'>02</span>
                <h4>
                  Chauffeur services at your arrival
                </h4>
                <p>Find help with booking and travel plans, see what
                  to expect along the journey to your favourite destinations!
                </p>
              </div>

              <div className="singleInfo"   data-aos="fade-down" data-aos-duration="4000">
                <span className='number colorTwo'>03</span>
                <h4>
                  Multi-risk travel insurance 
                </h4>
                <p>Find help with booking and travel plans, see what
                  to expect along the journey to your favourite destinations!
                </p>
              </div>

            </div>
            <div className="imgDiv"  data-aos="fade-up" data-aos-duration="2500">
              <img src={gridImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support