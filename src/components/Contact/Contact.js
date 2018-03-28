import React from 'react';

const Contact = (props) => {
    return(<div className = 'contact-container'>
        <h1 className = 'title'>/Contact</h1>
        <div className = 'contact-icons'>
         <i class="fas fa-envelope"></i>
         <i class="fab fa-github"></i>
         </div>
         <div className = 'contact-info'>
        <ul>
           <li className = "contact-item">zcericola@gmail.com</li>
           <li className = "contact-item">github.com/zcericola</li>            
        </ul>
        </div>
        
    </div>)
};

export default Contact;