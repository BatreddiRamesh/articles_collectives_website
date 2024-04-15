import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCheck, faHome, faMessage, faQuestionCircle, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons/faLinesLeaning';
import { useState } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState("artists"); 

    const handleLinkClick = (link) => {
      setActiveLink(link);
    }
  return (<>
  <Container fluid  className=' m-0,p-0' style={{position:"fixed",zIndex:1,background:"white"}}>
  
      <Row className='px-5'>
        <Col xs={"4"} md >
      <h2 style={{ color: 'rgba(0, 0, 0, 1)' }}><img src={"/images/logo.png"}/></h2>
        </Col>
        <Col sm={"8"} md={"6"} className=" justify-content-center d-none d-xs-none d-md-flex">
          <Nav className="flex-row">
            <Nav.Link href="#" className="d-flex align-items-center" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              <FontAwesomeIcon icon={faUser} className="me-2" />
              You
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              <FontAwesomeIcon icon={faLinesLeaning} flip="horizontal" className="me-2" />
              Catalogue
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center" style={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: "bold" }}>
              <FontAwesomeIcon icon={faLinesLeaning} flip="horizontal"  />
              Discover
            </Nav.Link>
          </Nav>
        </Col>
        <Col className=" text-end p-0" xs={"8"} md>
          <Button variant="outlined" className='d-sm-none'>
            <img src={"/images/header1.png"}/>
          </Button>
          <Button variant="outlined" >
            <img src={"/images/header2.png"}/>
          </Button>
          <Button variant="outlined" className='d-none d-xs-none d-sm-inline'>
      <img src={"/images/header3.png"} alt="Button Image" />
    </Button>
          <Button variant="outlined" className='d-sm-none'>
            <img src={"/images/header4.png"} />
            
          </Button>
        </Col>
      </Row>
      <Row>
    
    <Col className="d-flex justify-content-center m-0" style={{backgroundColor:"#f6f6f6"}}>
    <Nav className="flex-row" >
      <Nav.Link href="#home" 
                className={`d-flex align-items-center ${activeLink === "artists" ? "active" : ""}`}
                onClick={() => handleLinkClick("artists")} 
                style={{ color: 'rgba(0, 0, 0, 1)', borderBottom: activeLink === "artists" ? "2px solid black" : "none" }}>
        Artists
      </Nav.Link>
      <Nav.Link href="#about" 
                className={`d-flex align-items-center ${activeLink === "businesses" ? "active" : ""}`} 
                onClick={() => handleLinkClick("businesses")} 
                style={{ color: 'rgba(0, 0, 0, 0.6)', borderBottom: activeLink === "businesses" ? "2px solid black" : "none" }}>
        Businesses
      </Nav.Link>
      <Nav.Link href="#contact" 
                className={`d-flex align-items-center ${activeLink === "auctions" ? "active" : ""}`} 
                onClick={() => handleLinkClick("auctions")} 
                style={{ color: 'rgba(0, 0, 0, 0.6)', borderBottom: activeLink === "auctions" ? "2px solid black" : "none" }}>
        Auctions
      </Nav.Link>
      <Nav.Link href="#contact" 
                className={`d-flex align-items-center ${activeLink === "events" ? "active" : ""}`} 
                onClick={() => handleLinkClick("events")} 
                style={{ color: 'rgba(0, 0, 0, 0.6)', borderBottom: activeLink === "events" ? "2px solid black" : "none" }}>
        Events
      </Nav.Link>
    </Nav>
  
  </Col>
   
   </Row>
    </Container>
    
   
   </>);
}

export default Header;
