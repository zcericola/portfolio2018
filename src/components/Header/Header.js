import React, {Component} from 'react';

class Header extends Component {
   

    render(){
        return(<div className = 'header-container'>
        <ul id = 'logo'>
            <li className = 'nav-element'>Home</li>
        </ul>
        <ul id = 'nav-bar'>
            <li className = 'nav-element'>About</li>
            <li className = 'nav-element'>Projects</li>
            <li className = 'nav-element'>Contact</li>         
        </ul>
        </div>)
    }
}

export default Header;