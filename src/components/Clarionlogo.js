import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import logoimage1 from "../assets/clariofionlogo.png"
import logoimage2 from "../assets/assignmentlogo1.png"
import logoimage3 from "../assets/assignmentlogo2.jpg"






const Clarionlogo = () => {
  return (
    <div  className='clarionlogo '>
      <Container>
        <Row>
        <Col sm={12} className=''>
            <div className="clarionwrapper d-flex " style={{ alignItems: 'center', justifyContent: 'space-between'}} >
                <div className="clarionlogo " >
                <img src={logoimage1} alt="" className='img-fluid' /> 
                </div>
                <div className="clarionotherlogos d-flex mx-3 " >

                <img src={logoimage2} alt="" className='img-fluid' />
                <img src={logoimage3} alt="" className='img-fluid' />
                </div>
            </div>
        </Col>


        </Row>
      </Container>
    </div>
  )
}

export default Clarionlogo
