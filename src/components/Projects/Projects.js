import React, {Component} from 'react';

//require the images for the project cards
const artifactWeb = require('../../assets/artifactweb.png');
const bookSpyWeb = require('../../assets/bookspyweb.png');
const shelfieWeb = require('../../assets/shelfieweb.png');

class Projects extends Component {
    constructor(){
        super();


    this.displayProjects = this.displayProjects.bind(this);
    }

    displayProjects(){
        const projects = [{ title: "Artifact Fine Goods", img: `${artifactWeb}`, desc: "Artifact is a fictional fullstack e-commerce website that allows a user to browse, add an item to their cart, and checkout using Stripe." }, { title: "BookSpy", img: `${bookSpyWeb}`, desc: "A full-stack book search application that pulls data from the GoodReads API." }, { title: "Data Store App", img: `${shelfieWeb}`, desc: "An app that replicates a physical filing cabinet using a database to persist information." }];
        

        return projects.map((curr, index) => {
            return <div className="card" key={index}>
                <div className="info-box">
                  <h1 className="card-title">{curr.title}</h1>
                  <p className = "desc">{curr.desc}</p>
                </div>
                <div className="image-box">
                  <img src={curr.img} className="screenshot" alt="screenshot" />
                  <button className="code-btn">Github code</button>
                </div>
              </div>;
        })

    }

    render(){
        return(<div id = 'projects'>
        <h1 className = 'title'>/Projects</h1>
        <content className = 'cards-container'>
            {this.displayProjects()}        
        </content>


        
        </div>);
    }
}

export default Projects;