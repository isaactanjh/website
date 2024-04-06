import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Picture2.png";
import projImg2 from "../assets/img/Picture1.png";
import projImg3 from "../assets/img/Picture3.png";
import projImg4 from "../assets/img/Picture4.png";
import projImg5 from "../assets/img/Picture5.png";
import projImg6 from "../assets/img/Picture6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Steam Game Popularity Predictor",
      description: "SC1015 Data Science Module\nLearnt working with data\n in numpy and pandas",
      imgUrl: projImg1,
    },
    {
      title: "School Camp Management System",
      description: "SC2002 OOP Module\nLearnt OOP concepts using java",
      imgUrl: projImg2,
    },
     {
      title: "NTU STARS Bot",
      description: "Personal project\n  Python bot using selenium to \nautomatically snipe/swap class time slots",
      imgUrl: projImg3,
    },
    
    {
      title: "Portfolio Website",
      description: "Personal project\nLearnt front-end web dev using React",
      imgUrl: projImg4,
    },
    
    {
      title: "Telegram Timetable AI Bot",
      description: "Hackathon project\nLearnt working with telegram bot API\n and OpenAI API to generate timetable\n based on user input",
      imgUrl: projImg5,
    },
    {
      title: "Ride Sharing App",
      description: "School project\nLearnt working with Django, PostgreSQL\n and Google Maps API\n Working in restful API",
      imgUrl: projImg6,
    },
    /*
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    }, */
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my personal projects, school projects and competitions entries<br></br> Hover or click to learn more!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                descriptionStyle={{ whiteSpace: 'pre-wrap' }}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
