import Image from "next/image"
import { useState,useEffect } from "react";
function  Navbar (){
    const [scroll, setScroll] = useState(0);
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) *100;
        setScroll(ScrollPercent);
      };
      useEffect(()=>{
        window.addEventListener("scroll", onScroll);
      },[])
   
    return(
            <div className="header">
             <Image alt="logo" src='/logo.webp' className="logo" width={120} height={70}/>
          <div className="container">
          <div className="navContainer">
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
            <label htmlFor="menu-icon"></label>
            <nav className="nav">
              <ul className="pt-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          </div>
            <div style={{ width: `${scroll}%` }} className="scrollBarContainer">
                <div className="scrollBar">
                </div>
            </div>
            </div>
    )
}
export default Navbar