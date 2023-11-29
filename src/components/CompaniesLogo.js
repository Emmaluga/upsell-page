import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import image1 from "../assets/propertylogo1.png"
import image2 from "../assets/propertylogo2.png"
import image3 from "../assets/propertylogo3.png"
import image4 from "../assets/propertylogo4.jpg"



const CompaniesLogo = () => {
  return (
    <div className='companieslogo'>
     <Container>
     <Row className=''>
     <Col className='mt-3' sm={12} >
        <div className="comlogo d-flex "style={{justifyContent:'space-around'}}>

              <img src={image1} alt="" className='img-fluid'/>
              <img src={image2} alt="" className=''  height={"150px"}/>
              <img src={image3} alt=""  className="" height={"150px"}/>
              <img src={image4} alt="" className='' height={"150px"} />
   
        
        </div>
     </Col>
     </Row>
     </Container>
      
    </div>
  )
}

export default CompaniesLogo
