import React,{useEffect} from "react";
import aeroplane from "../../assests/aeroplane.png"
import video from "../../assests/video.mp4"
const Home = () => {

  return (
    <div className="home flex container">
      <div  className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-Lasting Memories With Us</h1>
      </div>
      <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={aeroplane} className="plane " alt="" />
      </div>
    </div>
  );
};

export default Home;
