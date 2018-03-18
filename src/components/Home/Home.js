import React,{Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Home extends Component {
    

    render(){
        return(<div className = 'home-container'>
        <Header/>
        <h1>Welcome to the Thunda Dome!!!</h1>
        <Footer/>
        </div>);
    }
}

export default Home;