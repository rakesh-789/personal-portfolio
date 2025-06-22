import React from 'react'
import './About.css'; 
import profile_img from '../../assets/about_profile.jpg';
import theme_pattern from '../../assets/theme_pattern.png';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <img src={theme_pattern} alt="theme" />
            <h1>About Me</h1>
            
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt="img" />   
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>This is Rakesh Kumar, a Software Engineer based in India. I specialize in creating dynamic and responsive web applications using the latest technologies. With a passion for coding and a keen eye for design, I strive to deliver high-quality software solutions that meet the needs of my clients.</p>
                    <p>My journey in software development began with a fascination for technology and a desire to solve real-world problems. Over the years, I have honed my skills in various programming languages and frameworks, allowing me to tackle complex challenges with ease. Whether it's building a user-friendly interface or optimizing backend performance, I am dedicated to delivering exceptional results.</p>
                </div> 
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML, CSS & JavaScript</p><hr style={{width: "50%"}}/> </div>
                    <div className='about-skill'><p>ReactJs</p><hr style={{width: "50%"}}/>  </div>
                    <div className='about-skill'><p>Python</p><hr style={{width: "50%"}}/>  </div>
                    <div className='about-skill'><p>Java & SpringBoot</p><hr style={{width: "50%"}}/>  </div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className='about-achivement'>
            <h1>10+</h1>
            <p>years of experience</p>
            </div>
            <hr/>
            <div className='about-achivement'>
            <h1>10+</h1>
            <p>porject completed</p>
            </div>
        </div>
    </div>
  )
}

export default About