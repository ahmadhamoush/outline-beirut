import { AnimationOnScroll } from 'react-animation-on-scroll'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import Image from 'next/image'
function Menu(){
return(
    <div className="item slide4">
    <div className="menuContainer">
     <AnimationOnScroll animateIn='animate__fadeInRight'>
     <h2 className="title">Special Items</h2>
     </AnimationOnScroll>
      <div>
    
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <h2 className="name">Item Name</h2>
     </AnimationOnScroll>
        <div className="itemContainer">  
            <AnimationOnScroll animateIn='animate__zoomIn'>
            <img src='/dish1.png' className='imgContainer'/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
            <img src='/dish2.png' className='imgContainer'/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
            <img src='/dish3.png' className='imgContainer'/>
        </AnimationOnScroll>
        </div>
      </div>
    </div>
    <div className='viewMenu'>
    <AnimationOnScroll animateIn='animate__fadeInLeft'>
    <h3>The Traditional Way</h3>
          </AnimationOnScroll>
   <a href="https://docs.google.com/viewer?url=https://ahmadhamoush.github.io/outline/menu.pdf" className="menu">   <AnimationOnScroll animateIn='animate__fadeInLeft'>View Menu </AnimationOnScroll></a>
          
   <AnimationOnScroll animateIn='animate__fadeInLeft'>
    <h3>            <p>Treat yourself to the ultimate burst of flavor with our flamethrower-heated burgers – a flame-grilled masterpiece that will set your taste buds ablaze!</p></h3>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__zoomIn'>
          <div className="videoContainer">
              <video loop muted  playsInline autoPlay preload="auto">
                <source src="/burger.mp4" />
              </video>
              </div>
        </AnimationOnScroll>
    </div>
  </div>

)
}
export default Menu