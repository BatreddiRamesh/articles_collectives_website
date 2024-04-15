import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid className='bg-dark p-5'>
    <Row style={{color:"white"}}>
      <Col xs={"2"} md={"4"}><img src={"/images/footerlogo.png"}/></Col>
      <Col xs={"4"} md={"3"}><div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Artists</a></div>
      <div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Businesse</a></div>
      <div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Collectors</a></div>
      <div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Everyone</a></div></Col>
      <Col xs={"6"} md={"3"}><div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Contact Us</a></div>
      <div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Privacy Policy</a></div>
      <div className='p-1'><a href="#" style={{textDecoration: "none",color:"#ffffff"}}>Terms & Conditions</a></div></Col>
      <Col xs={"12"} md={"2"}><div className='p-1 '>@2023</div>
      <div className='p-1'>Democrart Technologies Private Limited</div>
</Col>
    </Row>
  </Container>
  )
}

export default Footer