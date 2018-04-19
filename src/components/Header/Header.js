import React, {Component} from 'react';
const resume = require('../../assets/Zac Cericola Resume 2017.pdf');

class Header extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
         let dropDn = this.dropDn;
         if (dropDn.classList.contains("show-drop-down")) {
           dropDn.classList.remove("show-drop-down");
         } else if (dropDn.style.display === "") {
           dropDn.classList.add("show-drop-down");
           return;
         }

    }
   


    render(){
        return <div id="header">
            <ul id="logo">
              <a href="#logo">
                <li className="nav-element">Z.Cericola</li>
              </a>
            </ul>
            <ul id="nav-bar">
              {/* <a href="/#about">
                <li className="nav-element">About</li>
              </a> */}
              <a href="/#projects">
                <li className="nav-element">Projects</li>
              </a>
              <a href="#tech">
                <li className="nav-element">Tech</li>
              </a>
              <a href="/#contact">
                <li className="nav-element">Contact</li>
              </a>
              <a href={resume}>
                <li className="nav-element">Resume</li>
              </a>
            </ul>
            <i className="fas fa-bars" id="hamburger-menu" ref={menuBtn => (this.menuBtn = menuBtn)} onClick={this.handleClick} />
            <div className="mobile-drop-down" ref={dropDn => {
                this.dropDn = dropDn;
              }}>
              <ul>
                {/* <a href="/#about">
                  <li onClick = {this.handleClick}>About</li>
                </a> */}
                <a href="/#projects">
                  <li onClick = {this.handleClick}>Projects</li>
                </a>
                <a href="#tech">
                  <li onClick = {this.handleClick}>Tech</li>
                </a>
                <a href="/#contact">
                  <li onClick = {this.handleClick}>Contact</li>
                </a>
                <a href ="/#resume">
                <li onClick = {this.handleClick}>Resume</li>
                </a>
              </ul>
            </div>
          </div>;
    }
}

export default Header;