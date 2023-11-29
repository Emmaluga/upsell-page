import React from 'react'
import image1 from "../assets/4.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import image5 from "../assets/01.png"

const Header = () => {
  return (
    <div className='header d-flex mb-3'  style={{backgroundColor: "#252F3D", justifyContent: 'space-around'}}>

      <div className="img1" >
        <img src={image1} alt="" />
      </div>

      <div className="img2">
      <img src={image2} alt="" />
      </div>

      
      <div className="img5" >
        <img src={image5} alt="" />
      </div>

      <div className="img3">
      <img src={image3} alt="" />
      </div>

      <div className="img4">
      <img src={image4} alt="" />
      </div>




    </div>
  )
}

export default Header
