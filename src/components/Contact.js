import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import copy from '../assets/img/copy-solid.svg';
import { AlignCenter } from "react-bootstrap-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

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
    <p class="myemail" >Email: isaactanjiahao@gmail.com</p>
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
