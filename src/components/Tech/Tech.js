import React from 'react';



const Tech = (props) => {
    return <div id="tech">
        <h1 className="title">/Tech</h1>
        <section className ='tech-icons'>
        <i className="icon-html5-alt icon" title = "Html5"></i>
        <i className="icon-css3-alt icon" title = "Css3"></i>
        <i className="icon-sass icon" title = "Sass"></i>
        <i className="icon-javascript-alt icon" title ="JavaScript"></i> 
        <i className="icon-jquery icon" title = "Jquery"></i>
        {/* <i className="icon-bootstrap icon"></i> */}
        <i className="icon-reactjs icon" title = "React"></i>   
        {/* <i className="icon-angular icon"></i>  */}
        <i className="icon-nodejs icon" title = "NodeJS"></i>
        <i className="icon-postgres icon" title = "PostgreSQL"></i>
        </section>
      </div>;
    

};

export default Tech;