import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import eclipse1 from "../assets/elipse1.png"
import eclipse2 from "../assets/eclise4.png"
import eclip from "../assets/eclipse5.png"

const Clarionbuttons = () => {
  return (
    <div className='clarionbuttons mt-5'>
       <Container>
        <Row>
        <Col sm={12} className=''>
            <div className="c-buttons-wrapper d-flex" style={{justifyContent: 'space-between'
          }} >

               <div className="oneup mx-3 d-flex" >
               <div className="bone mx-3 " >
                   <img src={eclipse2} alt="" />
               </div>
               
               <div className="b-text ">
                <p>step1:CartReview</p>
               </div>
                </div> 
               {/*  */}
               <div className="twoup mx-3 d-flex" >
               <div className="btwo mx-3">
               <img src={eclipse2} alt="" />
               </div>
               
               <div className="b-text ">
                <p>step2:Checkout</p>
               </div>
                </div> 
               {/*  */}
               <div className="threeup left mx-3 d-flex" >
               <div className="bthree mx-3">
               <img src={eclipse1} alt="" />  
               </div>
               
               <div className="b-text "style={{fontWeight: 'bold'}}>
                <p>step3:SpecialOffer</p>
               </div>
                </div> 
                {/*  */}
                <div className="fourup mx-3 d-flex" >
               <div className="bfour mx-3">
                   <img src={eclip} alt="" /> 
               </div>
               
               <div className="b-text ">
                <p>step1:Confirmation</p>
               </div>
                </div> 
                {/*  */}
            </div>
        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Clarionbuttons
