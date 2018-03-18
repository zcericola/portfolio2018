import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super();

    }

    render(){
        return(<div className = 'header-container'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>            
        </ul>
        </div>)
    }
}

export default Header;