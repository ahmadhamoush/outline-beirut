import { AnimationOnScroll } from 'react-animation-on-scroll'
import Image from 'next/image'
import { Parallax } from "react-scroll-parallax"
function Menu(){
return(
    <div className="item slide4">
    <div className="menuContainer">
     <AnimationOnScroll animateIn='animate__fadeInRight'>
     <h2 className="title">Special Items</h2>
     </AnimationOnScroll>
      <div>
        <div className="itemContainer">  
        <div className='menuWrapper'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <h2 className="name">Item Name</h2>
     </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__zoomIn'>
              <div className='imgContainer'>
          <Image alt='dish' className='menuImg' src='/dish1.webp' sizes='100%' fill/>
              </div>
        </AnimationOnScroll>
        </div>
        <div className='menuWrapper'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <h2 className="name">Item Name</h2>
     </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
              <div className='imgContainer'>
          <Image alt='dish' className='menuImg' src='/dish2.webp' sizes='100%' fill/>
              </div>
        </AnimationOnScroll>
        </div>
        <div className='menuWrapper'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <h2 className="name">Item Name</h2>
     </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
              <div className='imgContainer'>
          <Image alt='dish' className='menuImg' src='/dish3.webp' sizes='100%' fill/>
              </div>
        </AnimationOnScroll>
        </div>
        </div>
      </div>
    </div>

    <Parallax speed={-10}>
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
    <div className='burgerContainer'>
       <AnimationOnScroll className='syringe' animateIn='animate__fadeInDown'>
        <Image alt='syringe' src='/syringe.webp' width={100} height={150}/>
        </AnimationOnScroll>
       <AnimationOnScroll animateIn="animate__fadeInUp">
        <Image  alt="burger" className='burger' src='/burger.webp' width={140} height={250}/>
        </AnimationOnScroll>
    
        </div>
      </Parallax>
  </div>

)
}
export default Menu