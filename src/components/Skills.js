
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are some language and framework that I am learning.<br></br>Currently self learning MERN stack for web-dev and data engineering.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Java</h5>
                       
                            </div>
                            <div className="item">
                                <h5>Python</h5>
                                
                            </div>
                            <div className="item">
                                <h5>Full-stack <br></br>web development<br></br>MERN</h5>
                               
                            </div>
                            <div className="item">
                                <h5>Photography</h5>
                               
                            </div>
                            <div className="item">
                                <h5>Pandas &<br></br>Numpy(python)</h5>
                               
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
