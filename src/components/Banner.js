import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';



export const Banner = () => {


  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio Website</span>
                <h1>{`Hi! I'm Isaac`} </h1>
                  <p>A Year 2 computer engineering student in NTU <br></br>
                    Interested in data science and engineering roles.<br></br>
                    On the lookout for exciting internship opportunities!
                  </p>
                  <HashLink to='#connect'>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{ width: '20em', height: 'auto' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}
