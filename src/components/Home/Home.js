import React,{Component} from 'react';

import Header from '../Header/Header';

class Home extends Component {
    constructor(){
        super();
    }

    render(){
        return(<div className = 'home-container'>
        <Header/>
        <h1>Welcome to the Thunda Dome!!!</h1>
        </div>);
    }
}

export default Home;