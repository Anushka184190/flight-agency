import React from "react";
import paris from "../../assests/paris.jpg";
import newYork from "../../assests/new-york.jpg";
import dubai from "../../assests/dubai.jpg";
import london from "../../assests/london.jpg";
import user1 from "../../assests/user1.jpg";
import user2 from "../../assests/user2.jpg";
import user3 from "../../assests/user3.jpg";
import user4 from "../../assests/user4.jpg";

const users=[
  {
    id:1,
    location: paris,
    imgSrc:user1,
    name:"Jia Homes",
    socialLink:"@jiaHomes"
  },
  {
    id:2,
    location: london,
    imgSrc:user2,
    name:"Mia Tomes",
    socialLink:"@MiaTomes7"
  },
  {
    id:3,
    location: dubai,
    imgSrc:user3,
    name:"Burno Mars",
    socialLink:"@BurnoMars666"
  },
  {
    id:4,
    location: newYork,
    imgSrc:user4,
    name:"Ariana Grande",
    socialLink:"@Arry9"
  }
]

const Traverlers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          
        {users.map((e)=>{
          return (
            <div data-aos="fade-up" data-aos-duration="2500" className="singleTraveler">
            <img src={e.location} className="destinationImage" />

            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={e.imgSrc} className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>{e.name}</span>
                <p>{e.socialLink}</p> 
              </div>
            </div>
          </div>
          )
        })}

        </div>
      </div>
    </div>
  );
};

export default Traverlers;
