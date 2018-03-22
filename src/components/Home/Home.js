import React,{Component} from 'react';

class Home extends Component {   

    render(){
        return(<div className = 'home-container'>
        <img src = {require('../../assets/palm.jpg')} />
        <section className = 'heading-text'>
        <h1>Zac Cericola</h1>
        <h2>Full Stack Web Developer</h2>
        </section>        
        </div>);
    }
}

export default Home;