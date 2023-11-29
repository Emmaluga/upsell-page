import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import logoimage6 from "../assets/picprofile.png"
import eclipse6 from "../assets/eclipse6.png"
import verifiedcustomerimg from "../assets/Verified Customer.png"
import logoimage7 from "../assets/assignmentlogo7.jpg"
import logoimage1 from "../assets/assignmentlogo6.jpg"
import imagecircle1 from "../assets/Frame 193.png"
import tick from "../assets/tick-circle.png"
import percent from "../assets/percent.png"
// import logoimage5 from "../assets/luga1.jpg"
import logoimage8 from "../assets/assignmentlogo8.png"
// import logoimage9 from "../assets/assignmentlogo9.png"
// import logoimage11 from "../assets/assignmentlogo11.png"
import logoimage10 from "../assets/creditcards.png"
// import  { FaRegStar, FaCheck } from "react-icons/fa";
import star1 from "../assets/star.png"
import Card from "react-bootstrap/esm/Card" 


const Clarionproduct = () => {
  return (
    <div className='clarionpage mt-5'>
      <Container>
        <Row className=''>
        <Col className='bg- ' md={6}>
            <div className="img-prduct ">
                <img src={logoimage1} alt="" className='img-fluid' />
            </div>
            <div className="testimonial d-flex  mt-3 ">
                <div className="sm-img mx-3">

                <img src={logoimage6} alt="" className='img-fluid t ' /> 
               
                </div>
                
            <div className="ts">
             {/* <span className='mx-1' style={{color: "yellow" }}><FaRegStar /></span>   */}
                 <img src={star1} alt="" />
                 <img src={star1} alt="" />
                 <img src={star1} alt="" />
                 <img src={star1} alt="" />
                 <img src={star1} alt="" />
                       
               <div className="name-wrapper d-flex">
                <span> ken-t</span> 
                <div className="name mx-2">
                   <img src={eclipse6} alt="" />
                </div>
               <p className='' style={{color: "#5BB59A"}}>Verified customet</p>

               </div>
            </div>


            </div>
              <div className="ringer">
                'As soon as the Clarifion arrived, I put one in my bedroom. This was late in the afternoon
                when I went to the bedroom in the evening, it smells clean.When I went to bed, I felt I could breathe better.Wonderful.'
              
              </div>


        </Col>

        <Col className='mt-' md={6}>
       
          

            <div className="img-text ">
 <h3><span style={{color: '#2C7EF8'}} className=''>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span style={{color: '#2C7EF8'}}>$14 Each</span></h3>
 ($84.00Total!)

           </div>

           

      
       

 

            
           <div className="wrapper d-flex mt-3 " style={{justifyContent: ''}}>

               
               
                 <div className="ringer   mx-">
                    <img src={logoimage7} alt="" className='img-fluid'  /> 
                 </div>
                    <div className=" mx-3 ">
                        <h5>Clarifion Air Lonizer</h5>
                      
                       <div className="rex  mt-2">
                        <div className="star">

                       <span className=''><img src={star1} alt="" /> </span> 
                       <span className=''><img src={star1} alt="" /> </span> 
                       <span className=''><img src={star1} alt="" /> </span> 
                       <span className=''><img src={star1} alt="" /> </span> 
                       <span className=''><img src={star1} alt="" /> </span> 

                        </div>
                      
           

                       <div className="  mx-3 ">
                        <img src={imagecircle1} alt="" />
                       </div>
                       {/* <div className="b-text">
                        <p>12 days in stock</p>
                       </div> */}

                       </div>
                        <p>Simply plug a Clarifion into any standard outlet and replace bulky expensive air purifiers with a sample </p>
                        
                    </div>

                    <div className="pricey">
                    <span className='mx-3'>$180</span>
                    <span className='mx-' style={{fontSize: '30PX', color: "#2C7EF8"}}>$84</span>
                    </div>

                   
              
             </div>
             <div className="new-text mt-3 ">
                <div className="sone d-flex">
                <span className='mx-3'><img src={tick} alt="" /> </span> 
                <h5>Navigation Technology may <span className='s' style={{fontWeight: "bold", color: 'black'}}>help with allegiens</span></h5>
                </div>

                <div className="sone d-flex">
                <span className='mx-3'><img src={tick} alt="" /> </span> 
                <h5>Design for <span className='s' style={{fontWeight: "bold", color: 'black'}}>air rejuvenation</span></h5>
                </div>

                <div className="sone d-flex">
                <span className='mx-3'><img src={tick} alt="" /> </span> 
                <h5> <span className='s' style={{fontWeight: "bold", color: 'black'}}>Perfect for every room</span> in all types of places </h5>
                </div>
                  
                    
                       

                    </div> 

                    <div className="Save d-flex mt-3">
                        <div className=" mx-2">
                          <img src={percent} alt="" />
                        </div>
                        <p className='p-save '>Save <span style={{color: '#2C7EF8'}} > 53%</span> and get <span style={{color: '#2C7EF8'}}>6 extra Clarifion </span >for only$14 Each<span style={{color: '#2C7EF8'}}></span></p>
                    </div>
                    <div className="m-auto">
                   <button className='b m-auto' >YES-CLAIM MY DISCOUNT </button>
                    </div>
                    
                     <div className="shipping ">
                    <span className='mx-3'>free shipping</span>
                    <span className='mx-3'>Secure 256-bit ssl Encryption</span>
                    <span><img src={logoimage10} alt="" /></span>
                    {/* <span><img src={logoimage11} alt="" /></span>
                    <span><img src={logoimage9} alt="" /></span> */}
                    </div>
                    <div className="no-discount mb-4 mt-3">
                        <h5 className=' mx-5' style={{color: "red"}}>NO THANKS I DONT WANT THIS</h5>
                    </div>
                    <div className="satisfied d-flex">
                         <img src={logoimage8} alt="" className='img-fluid mx-3' />
                        <p>If you are not completely thrilled with your Clarifion. we have a 
                            <span style={{fontWeight: 'bold'}}> 30 days satisfaction guarantee </span> Please refer to our return policy 
                            at the bottom of the page for more details. <br />Happy Shoping!
                        </p>
                    </div> 
                    

            



           {/* </div> */}
      
           


    

        </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Clarionproduct
