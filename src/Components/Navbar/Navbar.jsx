import React,{ useState} from "react";
import {SiConsul} from "react-icons/si"
import {BsPhoneVibrate} from "react-icons/bs"
import {AiOutlineGlobal} from "react-icons/ai"
import {CgMenuGridO} from "react-icons/cg"
import img from '../../assests/logo.png';
const Navbar = () => {

  const [active,setactive]=useState("navBarMenu");
  const showNavBar =()=>{
    setactive("navBarMenu showNavBar")
  }
  const hideNavBar =()=>{
    setactive("navBarMenu")
  }
  const [noBg,addbg]=useState("navBarTwo");
  const addBgColor =()=>{
    if(window.scrollY >= 10){
      addbg("navBarTwo navbar_with_bg")
    }
    else{
      addbg("navBarTwo")
    }
  }
window.addEventListener("scroll" , addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon"/>
        </div>
        <div className="none flex ">
          <li className="flex"><BsPhoneVibrate className="icon"/> Support</li>
          <li className="flex"><AiOutlineGlobal className="icon"/> Languages</li>
        </div>
        <div className="atb flex">
          <span>
            Sign In
          </span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={img} className="Logo"/>
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li className="listItem" onClick={hideNavBar}>Home</li>
            <li className="listItem" onClick={hideNavBar}>About</li>
            <li className="listItem" onClick={hideNavBar}>Offers</li>
            <li className="listItem" onClick={hideNavBar}>Seats</li>
            <li className="listItem" onClick={hideNavBar}>Destination</li>
          </ul>
          <button className="btn flex btnOne" onClick={hideNavBar}>Contact</button>
          </div>
          <button className="btn flex btnTwo">Contact</button>
          <div className="toggleIcon" onClick={showNavBar}>
            <CgMenuGridO className="icon"></CgMenuGridO>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
