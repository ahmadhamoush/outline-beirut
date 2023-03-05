import GoogleMapReact from "google-map-react"
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
function Location (){
    const options ={
        styles: [{
            elementType: "geometry",
            stylers: [{
              color: "#000000"
            }]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{
              color: "#242f3e"
            }]
          },
          {
            elementType: "labels.text.fill",
            stylers: [{
              color: "#746855"
            }]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#ffffff"
            }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#ffffff"
            }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
              color: "#263c3f"
            }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#6b9a76"
            }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
              color: "#000000"
            }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#ffffff"
            }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#D3D3D3"
            }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
              color: "#909090"
            }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#1f2835"
            }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#d1d1d1"
            }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
              color: "#2f3948"
            }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#D3D3D3"
            }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#17263c"
            }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#515c6d"
            }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{
              color: "#17263c"
            }],
          },
        ],
    }
   function handleApiLoaded(map, maps) {
        let marker = new maps.Marker({
          position: {lat: 33.89494103856613, lng: 35.5127938237086},
          map,
          title: 'Hello World!'
        });
      }
    return(
       <div className="mapSlide">
        <div className='burgerContainer'>
       <AnimationOnScroll className='syringe' animateIn='animate__fadeInDown'>
        <Image alt='syringe' src='/syringe.webp' width={100} height={150}/>
        </AnimationOnScroll>
       <AnimationOnScroll animateIn="animate__fadeInUp">
        <Image  alt="burger" className='burger' src='/burger.webp' width={140} height={250}/>
        </AnimationOnScroll>
    
        </div>
         <div className="locationContainer">
        <div className="location">
            <AnimationOnScroll animateIn="animate__fadeInRight">
            <h2>Experience Our Restaurant in Person</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
            <p>Come and experience the delicious flavors of our authentic 2d restaurant, expertly prepared by our skilled chefs using only the freshest ingredients. Plus, with our cozy atmosphere and friendly service, youll feel right at home at
            our restaurant. Dont miss out ... make your reservation today!</p>
            </AnimationOnScroll>
     
        </div>
        <AnimationOnScroll animateIn='animate__zoomIn'>
        <div className="map">
      <GoogleMapReact
      options={options}
        bootstrapURLKeys={{ key: "AIzaSyAdCJpL09Z-XFnHjggrTpgsVVPuB9MSkN0" }}
        defaultCenter={{lat: 33.89494103856613, lng: 35.5127938237086}}
        defaultZoom={19}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
      </GoogleMapReact>
    </div>
        </AnimationOnScroll>
      
      </div>
       </div>
       
    )
}export default Location