import React, {Component} from 'react';

class Header extends Component {
   

    render(){
        return(<div id = 'header'>
        <ul id = 'logo'>
            <a href = '#'><li className = 'nav-element'>Home</li></a>
        </ul>
        <ul id = 'nav-bar'>
            <a href = '/#about'><li className = 'nav-element'>About</li></a>
            <a href = '/#projects'><li className = 'nav-element'>Projects</li></a>
            <a href = '#tech'><li className = 'nav-element'>Tech</li></a>
            <a href = '/#contact'><li className = 'nav-element'>Contact</li></a>         
        </ul>
        </div>)
    }
}

export default Header;