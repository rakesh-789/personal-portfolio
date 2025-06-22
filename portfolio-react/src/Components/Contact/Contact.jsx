import React from 'react'
import './Contact.css';
// import theme_pattern from '../../assets/theme_pattern.png'; 
import mail_icon from '../../assets/mail_icon.png';
import call_icon from '../../assets/call_icon.png';
import location_icon from '../../assets/location_icon.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b95e2567-6612-44e1-ae46-66b5bdf7045a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Contact Me</h1>
            {/* <img src={theme_pattern} alt='pattern' /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>If you have any questions or just want to say hi, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="Email Icon" /> 
                    <p>rakeshhraj520@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="call Icon" /> 
                    <p>+91 7889400773</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="location Icon" /> 
                    <p>Noida, Uttar Pradesh</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name='name' />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your email" name='email' />
            <label htmlFor="">Your Message</label>
            <textarea placeholder="Type your message" name='message' rows="8"></textarea>
            <button type='submit' className="contact-submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact