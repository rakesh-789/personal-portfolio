import React from 'react'
import './Services.css'; 
// import theme_pattern from '../../assets/theme_pattern.png'; 
import Service_Data from '../../assets/services_data';
// import arrow_icon from '../../assets/arrow_icon.png'; 

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt='theme' /> */}
        </div>
        <div className='services-container'>
            {Service_Data.map((service, index) => {
                return <div className='service-format' key={index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More...</p>
                        {/* <img src={arrow_icon} alt='icon' /> */}
                    </div>
                </div>
            })}
        </div>
    
    </div>
  )
}

export default Services