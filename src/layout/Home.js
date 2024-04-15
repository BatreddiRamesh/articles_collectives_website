import {faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Container, Nav, Row, Stack } from 'react-bootstrap';

function Home() {
    const [activeLink, setActiveLink] = useState("artists"); 
    const [openIndex, setOpenIndex] = useState(null);
    const handleLinkClick = (link) => {
      setActiveLink(link);
    }

    const following = [
    {id:1,artist:"/images/artist1.PNG",name:"Aditi Bhatia",status:true,img:["/images/artist1img1.PNG","/images/artist1img2.PNG","/images/artist1img3.PNG"]},
    {id:1,artist:"/images/artist2.PNG",name:"Kanhaiya Sharma",status:true,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]},
    {id:1,artist:"/images/artist3.PNG",name:"Dharshana Bajaj",status:true,img:["/images/artist3img1.PNG","/images/artist3img1.PNG","/images/artist3img1.PNG"]}
      ]

    const handPicked = [{id:1,src:"/images/handpicked1.PNG",title:"Upcoming abstract artists"},
    {id:2,src:"/images/handpicked2.PNG",title:"Graffiti and street artists"},
    {id:3,src:"/images/handpicked3.PNG",title:"Contemporary artists"}
      ]


      const [featured,setFeatured]= useState([
        {id:1,artist:"/images/artist1.PNG",name:"Aditi Bhatia",status:false,img:["/images/artist1img1.PNG","/images/artist1img2.PNG","/images/artist1img3.PNG"]},
        {id:2,artist:"/images/artist2.PNG",name:"Kanhaiya Sharma",status:true,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]},
        {id:3,artist:"/images/artist3.PNG",name:"Dharshana Bajaj",status:false,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]},
        {id:4,artist:"/images/artist4.PNG",name:"Bhargavkumar Kulkarni",status:true,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]},
        
        {id:5,artist:"/images/artist3.PNG",name:"Dharshana Bajaj",status:false,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]}, 
        {id:6,artist:"/images/artist2.PNG",name:"Kanhaiya Sharma",status:false,img:["/images/artist2img1.PNG","/images/artist2img2.PNG","/images/artist2img3.PNG"]},
    ]);

    const updateState = (id) => {
      setFeatured(prevFeatured => (
        prevFeatured.map(artist => {
          if (artist.id === id) {
            return {
              ...artist,
              status: !artist.status // Toggle the status
            };
          }
          return artist;
        })
      ));
    };

    const questionsAndAnswers = [
      {
        question: "What is discover for artists?",
        answer: "What is discover for artists.What is discover for artists.What is discover for artists"
      },
      {
        question: "How does Asign help me discover new artists?",
        answer: "text text text text How does Asign help me disHow does Asign help me dis How does Asign help me dis How does Asign help me dis"
      },
      {
        question: "How does Asign create curated list of artists for me?",
        answer: "does Asign create curated list of artists for  does Asign create curated list of artists for  does Asign create curated list of artists for  does Asign create curated list of artists for  does Asign create curated list of artists for  does Asign create curated list of artists for  "
      },
      {
        question: "Can I buy an object from an artist featured on Asign?",
        answer: "Abuy an object from an artist featured on buy an object from an artist featured on buy an object from an artist featured on buy an object from an artist featured on"
      },
    ];
    
    
      const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    


  return (<>
    <Container fluid className='p-5'>
         <Row className="align-items-center">
              <Col xs={"8"}>
              <h3 style={{ color: 'rgba(0, 0, 0, 1)'}}>
      Artists you follow <sup>12</sup>
    </h3>
              </Col>
              
              <Col xs={"4"} className="d-flex justify-content-end ">
              <Button className='bg-white text-black ' style={{ borderBottom: "2px solid black" ,borderStyle: "none none solid none",borderRadius:0}}>VIEW ALL</Button>
</Col>
            </Row>
      <Row className="mb-3">
      {following.map((follow)=>(
        <Fragment key={follow.id}>
        <Col xs={12} md={4}>
          <Card style={{ padding: '20px' }}>
            <Row className="align-items-center">
              <Col xs={"2"} sm={3}>
                <Card.Img variant="top" src={follow.artist} className="rounded-circle" style={{ width: "50px", height: "50px" }} />
              </Col>
              <Col xs={"8"} sm={6}>
                <Card.Title>{follow.name}</Card.Title>
                <Card.Text>
                  b.1992 
                </Card.Text>
              </Col>
              <Col xs={"2"} sm={3} className="d-flex justify-content-end">
                <Button variant="primary" className='rounded-pill btn-dark'>FOLLOWING</Button>
              </Col>
            </Row>
            <Row className="mt-3">
            {follow.img.map((index)=>(
        <Fragment key={index}>
              <Col xs={4}>
                <Card.Img variant="top" src={index} style={{height:"150px"}}/>
              </Col></Fragment>))}
              
            </Row>
          </Card>
        </Col></Fragment>))}
      </Row>
    </Container>

<Container fluid className='p-5'>
<Row className="align-items-center">
     <Col xs={"8"}>
     <h3>
Handpicked for you
</h3>
<h6>
based on artists you follow on asign
</h6>
     </Col>
     
     <Col xs={"4"} className="d-flex justify-content-end ">
     <Button className='bg-white text-black ' style={{ borderBottom: "2px solid black" ,borderStyle: "none none solid none",borderRadius:0}}>VIEW ALL</Button>
</Col>
   </Row>
<Row className="mb-3">
    {handPicked.map((item)=>(
        <Fragment key={item.id}>



<Col xs={12} md={4}>
<Card.Body>
  <Card.Img variant="top" src={item.src} className="mb-3" />
  <Card.Title className="mb-3">{item.title}</Card.Title>
  <Button className='bg-white text-black rounded-pill px-4' style={{ border: "1px solid black" ,borderStyle: " solid"}}>VIEW</Button>
</Card.Body>
</Col></Fragment>))}
</Row>
</Container>



<Container fluid className='p-5'>
<Row className="align-items-center">
     <Col xs={"12"} md={"8"}>
     <Nav className="flex-row" >
        <Nav.Link href="#home" 
                  className={`d-flex align-items-center ${activeLink === "artists" ? "active" : ""}`}
                  onClick={() => handleLinkClick("artists")} 
                  style={{ color: 'rgba(0, 0, 0, 1)', borderBottom: activeLink === "artists" ? "2px solid black" : "none" }}>
          Featured Artists <sup> 100</sup>
        </Nav.Link>
        <Nav.Link href="#about" 
                  className={`d-flex align-items-center ${activeLink === "businesses" ? "active" : ""}`} 
                  onClick={() => handleLinkClick("businesses")} 
                  style={{ color: 'rgba(0, 0, 0, 0.6)', borderBottom: activeLink === "businesses" ? "2px solid black" : "none" }}>
          Artists in Mumbai <sup> 15</sup>
        </Nav.Link>
      </Nav>
     </Col>
     
     <Col sm={"4"} className=" justify-content-end d-none d-md-flex">
     <Button className='bg-white text-black ' style={{ borderBottom: "2px solid black" ,borderStyle: "none none solid none",borderRadius:0}}>VIEW ALL</Button>
</Col>
   </Row>
<Row className="mb-3">
{featured.map((feature)=>(
        <Fragment key={feature.id}>
<Col xs={12} md={4} className="pb-4 pt-4">
          <Card style={{ padding: '20px' }}>
            <Row className="align-items-center" style={{height:"100px"}}>
              <Col xs={"2"} sm={3}>
                <Card.Img variant="top" src={feature.artist} className="rounded-circle" style={{ width: "50px", height: "50px" }} />
              </Col>
              <Col xs={"8"} sm={6}>
                <Card.Title>{feature.name}</Card.Title>
                <Card.Text>
                  b.1992 
                </Card.Text>
              </Col>
              <Col xs={"2"} sm={3} className="d-flex justify-content-end">
                <Button variant="primary" className={`rounded-pill bg-${feature.status?"dark":"light"} text-${feature.status?"light":"dark"} border-dark`} onClick={() => updateState(feature.id)}>{feature.status?"FOLLOWING":"FOLLOW"}</Button>
              </Col>
            </Row>
            <Row className="mt-3">
            {feature.img.map((index)=>(
        <Fragment key={index}>
              <Col xs={4}>
                <Card.Img variant="top" src={index} style={{height:"150px"}}/>
              </Col></Fragment>))}
              
            </Row>
          </Card>
        </Col></Fragment>))}
        <Col sm={"4"} className="d-xs-inline d-md-none">
     <Button className='bg-white text-black ' style={{ borderBottom: "2px solid black" ,borderStyle: "none none solid none",borderRadius:0}}>VIEW ALL</Button>
</Col>
</Row>
</Container>

<Container fluid  style={{backgroundImage: "url('/images/background.png')", backgroundSize: '100% 800px', backgroundPosition: 'center',backgroundRepeat:"no-repeat" }}>

      <Stack gap={3} style={{height:"500px"}} className='py-5'>
      <div className="p-2" style={{fontFamily:"neue montreal",color:"#ffffff"}}><h1 >Trending on Asign</h1>
      <h6><Button variant="primary" className='rounded-pill btn-light'>VIEW ALL</Button></h6></div>
      <div className="p-2 mt-auto" ><h1  style={{fontFamily:"eb garamond",fontSize:"18px",color:"#ffffff"}}>S.H.RAZA,<span style={{fontFamily:"eb garamond",fontSize:"14px"}}>Blind Boy,1344 circa</span></h1></div>
    </Stack>       
</Container>
  <Container fluid style={{ width: "50%" }}>
      <h1 className='justify-content-center d-flex'>Knowledge Center</h1>
      {questionsAndAnswers.map((qa, index) => (
        <React.Fragment key={index}>
          <Stack direction="horizontal" gap={3} style={{ borderBottom: "1px solid black" }}>
            <div className="p-2 me-auto">{qa.question}</div>
            <div className="p-2">
              <Button
                onClick={() => toggleOpen(index)}
                aria-controls={`example-collapse-text-${index}`}
                aria-expanded={openIndex === index}
                style={{backgroundColor:"#ffffff",border:"none",color:"#000000"}}
              >
                {openIndex === index?<FontAwesomeIcon icon={faMinus} />:<FontAwesomeIcon icon={faPlus}/>}
              </Button>
            </div>
          </Stack>
          <Collapse in={openIndex === index}>
            <div id={`example-collapse-text-${index}`}>
              {qa.answer}
            </div>
          </Collapse>
        </React.Fragment>
      ))}
      <h6 className='justify-content-center d-flex align-items-center'>Have more questions?<Button className='bg-white text-black ' style={{ borderBottom: "1px solid black" ,borderStyle: "none none solid none",borderRadius:0}}>REQUEST A CALLBACK</Button></h6>
    </Container>



</> )
}

export default Home;
