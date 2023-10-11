import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
const Search = () => {
  return (
    <div className="search section container">
      <div   data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>
        <div className="searchInputs flex">
          {/* input */}
          <div className="div singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go" />
            </div>
          </div>

          {/* input */}
          <div className="div singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          {/* input */}
          <div className="div singleInput flex">
            <div className="iconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          {/* input */}
          <div className="div singleInput flex">
            <div className="iconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>
          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
