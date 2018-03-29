import React from 'react';

const Contact = (props) => {
    return <div className="contact-container">
        <h1 className="title">/Contact</h1>
        <div className="contact">
          <i class="fas fa-envelope" />

          <span className="contact-item">zcericola@gmail.com</span>
        </div>
        <div className="contact">
          <i class="fab fa-github" />          
            <span className="contact-item">github.com/zcericola</span>
          
        </div>
      </div>;
};

export default Contact;