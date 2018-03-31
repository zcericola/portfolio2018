import React from 'react';

const Contact = (props) => {
    return <div id="contact">
        <h1 className="title">/Contact</h1>
        <div className="contact">
          <i className="fas fa-envelope" />

          <span className="contact-item">zcericola@gmail.com</span>
        </div>
        <div className="contact">
          <i className="fab fa-github" />          
            <span className="contact-item">github.com/zcericola</span>
          
        </div>
      </div>;
};

export default Contact;