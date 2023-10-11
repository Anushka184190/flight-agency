import React from "react";

const Subscribers = () => {
  return (
    <div className="subscribe section ">
      <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer container">
        <h2>Subscribe newsletter and get latest news</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your email address"/>
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
