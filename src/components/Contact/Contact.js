import React from 'react';
const resume = require('../../assets/Zac Cericola Resume.pdf');

const Contact = (props) => {
    return <div id="contact">
        <h1 className="title">/Contact</h1>
        {/* <div className="contact"> */}
        
          {/* <i className="fas fa-envelope contact-pic" />       
       
          <span className="contact-item">zcericola@gmail.com</span>
       
        </div> */}
        <div className="contact">
          <a href="https://www.github.com/zcericola">
            <i className="fab fa-github contact-pic" />
          </a>
          <a href = "https://www.github.com/zcericola"><span className="contact-item">github.com/zcericola</span></a>
        </div>
        <div className="contact">
          <a href={resume}>
            <i className="fas fa-file-alt contact-pic" />
          </a>         
          <a href = {resume}>
          <span className="contact-item">Resume</span>
          </a>
        
        </div>
      </div>;
};

export default Contact;