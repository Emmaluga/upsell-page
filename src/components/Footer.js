import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import footer1 from "../assets/Secure 256-bit SSL encryption..png"
import footer2 from "../assets/footer2.png"
import footer4 from "../assets/footerlogo.png"

const Footer = () => {
  return (
    <div>
  <div className="img" style={{backgroundColor: "252F3D"}}>
    <Container >
    <Row className='' >
    <Col sm={12} className='foot' >
        <div className="parent d-flex"  style={{justifyContent: 'space-between'}}>
            <div className="img">

          <img src={footer2} alt="" />
            </div>

          <div className="child d-flex" >
          <img src={footer4} alt="" className='img-fluid' />
       

          </div>
        
        </div>
    </Col>
    </Row>
    </Container>
    
  </div>
    </div>
  )
}

export default Footer
