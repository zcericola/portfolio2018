import React from 'react';

const Contact = (props) => {
    return <div id="contact">
        <h1 className="title">/Contact</h1>
        <div className="contact">
          <i className="fas fa-envelope contact-pic" />

          <span className="contact-item">zcericola@gmail.com</span>
        </div>
        <div className="contact">
          <a href="https://www.github.com/zcericola">
            <i className="fab fa-github contact-pic" />
          </a>
          <span className="contact-item">github.com/zcericola</span>
        </div>
        <div className="contact">
          <a href="https://www.github.com/zcericola">
            <i className="fas fa-file-alt contact-pic" />
          </a>
          <span className="contact-item">View my resume</span>
        </div>
      </div>;
};

export default Contact;