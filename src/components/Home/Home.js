import React,{Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Home extends Component {
    

    render(){
        return(<div className = 'home-container'>
        <Header/>
        <section className = 'heading-text'>
        <h1>Zac Cericola</h1>
        <h2>Full Stack Web Developer</h2>
        </section>
        <Footer/>
        </div>);
    }
}

export default Home;