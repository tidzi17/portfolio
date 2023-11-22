import React from "react";
import ContactForm from "../../components/form";
import mailicon from '../../assets/mail.png';
import linkicon from '../../assets/linkedin.png';
import githubicon from '../../assets/github.png';
import '../../styles/main.scss'

function Contact(){
    return(
        <div className="contact-container">
            <header className="headings-container">
                <p className="heading-first" id="first">Contact</p>
                <p className="heading-second" id="second">Get in touch</p>
            </header>
            <div className="contact-content">
                <div className="cinfo">
                    <h4>Let's build something great <span>together</span>!</h4>
                    <p>Feel free to contact me. I am always open
                         to discussing new projects, creative ideas,
                          or collaboration opportunities that align with your vision.</p>
                    <div className="social-icons-container">
                    <a href='https://www.linkedin.com/in/tijana-djudjic-0a6b3b278/'  target='blank'> <img src={linkicon} alt="linkedin-icon" className="icons-item"/></a>
                        <a href='mailto:tidzi15110@gmail.com'  target='blank' > <img src={mailicon} alt="mail-icon" className="icons-item" id="second-item"/></a>
                        <a href='https://github.com/tidzi17'  target='blank'> <img src={githubicon} alt="github-icon" className="icons-item"/></a>
                        </div>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
        
}

export default Contact;