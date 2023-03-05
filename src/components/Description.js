import { AnimationOnScroll } from "react-animation-on-scroll"
function Description (){
    return(
        <div className="item slide2">
          <div className="slide-desc">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <h2>Exquisite</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <h3>Experience</h3>
            </AnimationOnScroll>
         <div  className="descContainer">
         <AnimationOnScroll animateIn="animate__fadeInLeft">
            <p>Outline is a newly opened spot in the heart of Gemmayze, and while it may seem like any other new discovery, this restaurant has quite the unique twist. Everything is in 2D! Dining at this spot will give your the full comic book
              experience</p>
            </AnimationOnScroll>
         </div>
          
            {/* <i class="fa-solid fa-angle-down arrow"></i> */}
          </div>
        </div>
    )
}
export default Description