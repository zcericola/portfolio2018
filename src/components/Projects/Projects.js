import React, {Component} from 'react';

//require the images for the project cards
const artifactWeb = require('../../assets/artifactweb.png');
const bookSpyWeb = require('../../assets/bookspyweb.png');
const shelfieWeb = require('../../assets/shelfieweb.png');
const casaWeb = require('../../assets/casaweb.png');

class Projects extends Component {
    constructor(){
        super();


    this.displayProjects = this.displayProjects.bind(this);
    }

    displayProjects(){
        const projects = [{ title: "Artifact Fine Goods", img: `${artifactWeb}`, desc: "Artifact is a fictional fullstack e-commerce website that allows a user to browse, add an item to their cart, and checkout using Stripe.", site: 'http://www.artifactfinegoods.xyz', github: 'https://github.com/zcericola/artifact-project' }, { title: "BookSpy", img: `${bookSpyWeb}`, desc: "A full-stack book search application that pulls data from the GoodReads API.", github: "https://github.com/zcericola/api-books-project" }, {title: "Casa Connection Rental Management", img: `${casaWeb}`, desc: "A collaborative group project allowing property owners to organize and track tenant, financial, and maintenance information.", site: "http://www.casaconnectionmgmt.com", github: "https://github.com/rental-management/Casa-Connection"},{ title: "Data Store App", img: `${shelfieWeb}`, desc: "An app that replicates a physical filing cabinet using a database to persist information.", github: "https://github.com/zcericola/simulation-1" }];
        

        return projects.map((curr, index) => {
            return <div className="card" key={index}>
                <div className="info-box">
                  <h1 className="card-title">{curr.title}</h1>
                  <p className = "desc">{curr.desc}</p>
                  {curr.site ? <span className = 'site'>Live site:<a href = {`${curr.site}`}> {curr.site}</a></span> : null}
                </div>
                <div className="image-box">
                  <img src={curr.img} className="screenshot" alt="screenshot" />
                  <a href = {curr.github} target = "#"><button className="code-btn">Github code</button></a>
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