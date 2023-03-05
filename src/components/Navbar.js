import Image from "next/image"

function  Navbar (){
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
            </div>
    )
}
export default Navbar