import {FaFacebookF} from "react-icons/fa";
import {BsTwitter,BsInstagram,BsFillTelephoneFill} from 'react-icons/bs'
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function  Landing (){
    return(
        <div className="item slide1">
       
            <button className="phone"><BsFillTelephoneFill/></button>
            <div className="slide-desc">
                <AnimationOnScroll animateIn="animate__backInDown">
                <h2>OUTLINE</h2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown">
                <h3>Beirut</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown">
                <p>LEBANONS FIRST 2D RESTAURANT</p>
                </AnimationOnScroll>
            <ul className="wrapper">
            <AnimationOnScroll animateIn="animate__backInDown">
            <li className="icon facebook">
                <span className="tooltip">Facebook</span>
             <span><FaFacebookF className="wrapperIcon"/></span>
              </li>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown">
                <li className="icon twitter">
                <span className="tooltip">Twitter</span>
            <span>     <BsTwitter className="wrapperIcon" /></span>
              </li>
                </AnimationOnScroll>
              
                <AnimationOnScroll animateIn="animate__backInDown">
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
            <span><BsInstagram className="wrapperIcon" /></span>
                </li>
                </AnimationOnScroll>
        
            </ul>
    
         <TfiAngleDoubleDown className="arrow" />
         
          </div>
        </div>
    )
}
export default Landing