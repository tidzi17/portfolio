import React from 'react';
import wave from '../../assets/wave.png';
import { Link } from 'react-router-dom';
import '../../styles/main.scss';
import ParticleBg from '../../components/particles';
import giticon from '../../assets/githubwhite.png';
import mailicon from '../../assets/mailwhite.png';
import linked from '../../assets/linkedinwhite.png';


function Home(){
    return(
        
        <div className="home-container">
            <ParticleBg />
            <div className="home-content">
                
               <div style={{display:'inline-flex', alignItems: 'center', gap: '5px'}}><h3>Hi there!</h3>  <img src={wave} alt="" className='wave'/></div> 
                <h1>I'm Tijana,<br /><span>Front-End</span> Developer.</h1>
                <p>A passionate Frontend developer and web design
                     enthusiast with an insatiable curiosity for 
                     all things web-related. As a creative mind 
                     and avid learner, I'm constantly exploring
                      new technologies and design trends to craft 
                      immersive and user-centric digital experiences.</p>
                    <Link to={"./portfolio"}><button className="glow-on-hover" type="button">Check out my work!</button></Link>
                    <div className="links-container">
                        <img src={giticon} alt="github-icon" className='links-item'/>
                        <img src={linked} alt="linkedin-icon" className='links-item'/>
                        <img src={mailicon} alt="mail-icon" className='links-item'/>
                        <div className='line'></div>
                    </div>
            </div>
           
        </div>
        
    )
    
}

export default Home;