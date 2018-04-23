import React from 'react';
const resume = require('../../assets/Zac Cericola Resume.pdf');

const Contact = (props) => {
    return <div id="contact">
        <h1 className="title">/Contact</h1>
        <div className="contact">
          <a href="https://www.github.com/zcericola" target = "#">
            <i className="fab fa-github contact-pic" />
          </a>
          <a href = "https://www.github.com/zcericola" target = "#"><span className="contact-item">Github</span></a>
        </div>
        <div className="contact">
          <a href={resume} target = '#'>
            <i className="fas fa-file-alt contact-pic" />
          </a>         
          <a href = {resume}>
          <span className="contact-item">Resume</span>
          </a>
        
        </div>

        <div className = "contact">
        <a href = "https://www.linkedin.com/in/zcericola" target = "#">
        <i class="fab fa-linkedin contact-pic"></i>       
        </a>
        <a href = 'https://www.linkedin.com/in/zcericola' target = "#">
        <span className = "contact-item">LinkedIn</span>
        </a>
        

        

        </div>
      </div>;
};

export default Contact;