import React,{Component} from 'react';

class Home extends Component {   

    render(){
        return <div id="home">
            <section className="heading-text">
              <h1>Hi, I'm Zac.</h1>             
            
              <p className="text" id = 'about'>
                A full stack web developer who specializes in
                Javascript. I build dynamic web applications that pair clean, well commented code with no-nonsense design.
              </p>              
            </section>
         
           
          </div>;
    }
}

export default Home;