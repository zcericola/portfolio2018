import React,{Component} from 'react';

class Home extends Component {   

    render(){
        return <div className="home-container">
            <section className="heading-text">
              <h1>Hello there!</h1>
              <h2>My Name is <span id = 'name'>Zac Cericola</span></h2>
              <p className="intro">
                I'm a full stack web developer who specializes in
                Javascript. Always willing to learn a new language or
                framework, I'd like to think that I'm pretty versatile,
                but you can be the judge of that.
              </p>
            </section>
            <section className="stack">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Angular.js</li>
              </ul>
              <ul>
                <li>PostGreSQL</li>
                <li>Express.js</li>
                <li>Node.js</li>
              </ul>
            </section>
          </div>;
    }
}

export default Home;