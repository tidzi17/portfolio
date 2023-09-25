import React from 'react';
import project from '../../assets/page1.jpg';
import giticon from '../../assets/githubwhite.png';
import linkicon from '../../assets/link.png';
import '../../styles/main.scss'

function Portfolio(){
   
    return(
        <div className="portfolio-container" id='portfolio'>
            <header className="headings-container">
                <p className="heading-first">Portfolio</p>
                <p className="heading-second">Portfolio</p>
            </header>
            <div className="projects-container">
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                        <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                            <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                            <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                            <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                            <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-img">
                            <img src={project} alt="project" className="scrolling-image"/>
                        </div>
                        <div className="projects-item-text">
                            <h3>Harmony-Real Estate</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, distinctio ipsum. Quaerat vitae velit est fugit eos nihil ad! Rerum sit commodi aspernatur totam rem explicabo incidunt nesciunt cum dolor?</p>
                        <div className='tech'>
                            <p>VanillaJS</p>
                            <p>SCSS</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                            <div className='links-item'>
                                <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                            </div>
                            <div className='links-item'>
                                <img src={linkicon} alt="linkto-icon" />
                                <p>Live preview</p>
                            </div>
                        </div>
                    </div>
               
            </div>
        </div>
    )
}

export default Portfolio;









/* Flying animation

import React, { useState } from 'react';
import image from '../../assets/sticker (2).png';
const [showIcon, setShowIcon] = useState(false);

const handleClick = () => {
    setShowIcon(true);

    setTimeout(() => {
        setShowIcon(false);
    }, 4000); 
};

<button onClick={handleClick}></button>
{showIcon && (
    <div className="flying-icon">
        <img
            src={image} 
            alt="Icon"
            className="animated-icon" 
        />
    </div>
)} */