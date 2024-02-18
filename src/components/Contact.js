import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import copy from '../assets/img/copy-solid.svg';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', scale:"75%"}}/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <div class="container email-container" style={{ display: 'flex', alignItems: 'center' , flexWrap: 'nowrap'}}>
  <div>
    <p class="myemail" >Email: tanjiahaoisaac@gmail.com</p>
  </div>
  <button 
    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    onClick={async () => {
      try {
        await navigator.clipboard.writeText('tanjiahaoisaac@gmail.com');
        alert('Email copied to clipboard');
      } catch (err) {
        alert('Failed to copy email');
      }
    }}
  >
    <img 
      src={copy} 
      className="copy-icon"
      alt="Copy Icon"
    />
  </button>
</div></div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
