import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'


const Clariontext = () => {
  return (
    <div className='clariontext'>

        <Container>
        <Row>
        <Col md={7} className='m-auto mt-5'>
            <div className="text">
              <h2 className='text-center' style={{color: 'black'}}>Wait! your order in progress</h2>
               <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
        </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Clariontext
