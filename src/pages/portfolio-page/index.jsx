import React from 'react';

import giticon from '../../assets/githubwhite.png';
import linkicon from '../../assets/link.png';
import '../../styles/main.scss';
import projectData from './data.json';
/* import pic from '../../assets/projects/carrental.png' */

function Portfolio(){
   
    return(
        <div className="portfolio-container" id='portfolio'>
            <header className="headings-container">
                <p className="heading-first">Portfolio</p>
                <p className="heading-second">Portfolio</p>
            </header>
            <div className="projects-container">
            {projectData.map((project) =>(
                    <div className="projects-item" key={project.id}>
                        <div className={`projects-item-img ${project.imageID === 'weather-app-img' ? 'weather-app-img' : ''}`}>
                           <a href={project.liveurl} target='blank'> <img src={project.image} alt={project.title} className="scrolling-image" /></a>
                        </div>
                        <div className="projects-item-text">
                            <h3>{project.title}</h3>
                            <p className='description'>{project.description}</p>
                        <div className='tech'>
                            <p>{project.techFirst}</p>
                            <p>{project.techSecond}</p>
                        </div>
                        </div>
                        <div className="projects-item-links">
                        <div className='links-item'>
                        <a href={project.codeurl}  target='blank'>  <img src={giticon} alt="github-icon" />
                                <p>Code</p>
                                </a>
                            </div>
                            <div className='links-item'>
                            <a href={project.liveurl} target='blank'> <img src={linkicon}  alt="linkto-icon" />
                                <p>Live preview</p>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                 
                 ))}
            </div>
            <div className='soon'>
                <p>New projects coming soon...</p>
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