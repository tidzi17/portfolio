import React/* , { useState }  */from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
/* import img from '../../assets/hey.png'; */
import skill1 from '../../assets/skills/html.png';
import skill2 from '../../assets/skills/css.png';
import skill3 from '../../assets/skills/js.png';
import skill4 from '../../assets/skills/react.png';
import skill5 from '../../assets/skills/sass.png';
import skill6 from '../../assets/skills/tw.png';
import skill7 from '../../assets/skills/figma.png';
import '../../styles/main.scss'


function About(){
    return(
        <div className="about-container">
            <header className="headings-container">
                <p className="heading-first">About me</p>
                <p className="heading-second">About me</p>
            </header>
            <div className='bg-item'><p id='bg1'> &lt;p&gt;</p></div>
            <div className='bg-item'><p id='bg2'> &lt;/p&gt;</p></div>
            <div className="about-content">
              <div className="about-me-container">
                <h4>A little bit about me</h4>
                <p className="text-block">
                Hello there! 👋 I'm Tijana, a frontend developer with a passion for React and an 
                occasional flair for design. When I'm not busy crafting 
                pixel-perfect user interfaces, you'll likely find me cozying up to 
                a cup of coffee <i className="fa fa-coffee"></i> with a keyboard under
                 my fingertips. I'm all about that 'never-stop-learning' life, and 
                 I thrive on the constant evolution of web technologies. Rainy days 
                 are my secret source of creativity - there's something magical about 
                 the pitter-patter that sparks my coding mojo. While I may not be 
                 a professional designer, I've got a knack for crafting the visual charm of my projects. I love bringing design concepts to life and making them interactive web experiences.  Whether I'm transforming
                  ideas into code or debugging, I'm always 
                  up for a coding challenge and an extra shot of espresso. 
                  Let's bring some frontend magic to your project together!
                </p>
              </div>
              <div className="skills-container">
                <h4>skills</h4>
                <div className="skills-box">
                  <img src={skill1} alt="html-icon" id='skill1' className='skills-item'/>
                  <img src={skill2} alt="css-icon" id='skill2' className='skills-item'/>
                  <img src={skill3} alt="js-icon" id='skill3' className='skills-item'/>
                  <img src={skill4} alt="react-icon" id='skill4' className='skills-item'/>
                  <img src={skill5} alt="sass-icon" id='skill5' className='skills-item'/>
{                  <img src={skill6} alt="tailwind-icon" id='skill6' className='skills-item'/>}
                  <img src={skill7} alt="figma-icon" id='skill7' className='skills-item'/>
                </div>
              </div>
              <div className="buttons-container">
                <Link to={"/portfolio"}><button id='btn1'>Portfolio</button></Link>
                <button id='btn2'>Download CV</button>
              </div>
              </div>
            </div>
    )
}

export default About;
















/*   const [showImage, setShowImage] = useState(false);

  const handleClickImage = () => {
    // Toggle the state when the button is clicked
    setShowImage(!showImage);
    // Automatically hide the image after a few seconds
    setTimeout(() => {
      setShowImage(false);
    }, 3000); // Adjust the time for the image to disappear
  }; */
  /*    <button onClick={handleClickImage}>Show Fading Image</button>
      {showImage && (
        <div className="fading-image-container">
          <div
            className="animated-image">
                <img src={img} />
            </div>
        </div>
      )} */