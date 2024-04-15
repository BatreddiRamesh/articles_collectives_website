import React, { useState } from 'react';
import { Carousel, Col, Container, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faArrowCircleLeft, faArrowCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage() {
  // State to track the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array containing image paths
  const images = [
    "/images/LandingRight1.PNG",
    "/images/LandingRight2.PNG",
    "/images/LandingRight1.PNG",
    "/images/LandingRight2.PNG",
  ];

  // Function to handle clicking the left arrow button
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle clicking the right arrow button
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container fluid className='px-5' style={{paddingTop:"10%",backgroundColor:"#f1f1f1"}} >
      <Row className='pb-5'>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
        <Stack gap={3} style={{height:"400px"}}>
        <div className="mb-auto">
            <Button size={"small"} style={{border:"0px",fontFamily:"neue Montreal",color: 'rgba(0, 0, 0, 0.6)' }} className='rounded-pill bg-light text-dark py-1 my-3'>Spotlight</Button>
          </div>
      <div className="p-2 mt-auto"><Card.Img variant="top" src={"/images/LandingLeft.PNG"} className="rounded-circle" style={{ width: "100px", height: "100px" }} />
            <Card.Body>
              <Card.Title style={{fontFamily:"eb garamond",fontStyle:"italic",fontSize:"48px",color: 'rgba(0, 0, 0, 0.8)'}}>Bharti Kher</Card.Title>
              <Card.Text style={{fontFamily:"neue Montreal",fontSize:"16px",color: 'rgba(0, 0, 0, 0.6)' }}>
                Bharti Kher is a trans-cultural artist, drawing experiences from both her British and Indian roots 
              </Card.Text>
              <Button variant="primary" className='rounded-pill btn-dark' style={{fontFamily:"neue Montreal",fontSize:"16px"}}>LEARN MORE</Button>
              <Card.Text className='d-none d-md-block'>
                <Button variant="outlined" className='rounded-cicle' disabled={currentIndex === 0}   style={{ marginTop: '10px', marginRight: '10px',backgroundColor:"#ffffff",borderRadius: "50%", 
       }} onClick={handleLeftArrowClick}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <Button variant="outlined"  disabled={currentIndex === images.length - 1} onClick={handleRightArrowClick} style={{  marginTop: '10px',marginRight: '10px',backgroundColor:"#ffffff",borderRadius: "50%" }} >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Card.Text>
            </Card.Body></div>
    </Stack>
          
       
            
        </Col>
        <Col xs={12} md={8} className='order-first order-md-last'>
          <Carousel interval={null} activeIndex={currentIndex} controls={false} indicators={false}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block vh-54"
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ height: "540px",width:"100%" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
