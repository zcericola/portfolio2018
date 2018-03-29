import React, {Component} from 'react';

//require the images for the project cards
const artifactFrame = require('../../assets/artifactframe.png');
const bookSpy = require('../../assets/bookspy.png');

class Projects extends Component {
    constructor(){
        super();


    this.displayProjects = this.displayProjects.bind(this);
    }

    displayProjects(){
        const projects = [{ title: "Artifact Fine Goods", img: `${artifactFrame}`, desc: "Artifact is a fictional fullstack e-commerce website" }, { title: "BookSpy", img: `${bookSpy}`, desc: "A full-stack book search application." }, { title: "Data Store App", img: "image", desc: "An app that replicates a physical filing cabinet for storing important things." }, { title: "Group Project", img: "image", desc: "A project that I worked on with a team of n other developers." }];
        

        return projects.map((curr, index) => {
            return(<div className = 'card' key = {index}>
            <div className = 'info-box'>
            <h1 className = 'card-title'>{curr.title}</h1>
            <p>{curr.desc}</p>
            <button className = 'project-btn'>Github Code</button>
            <button className = 'project-btn'>Live Site</button>
            </div>
            <div className = 'image-box'>
            <img src = {curr.img} className = 'screenshot'/>
                </div>            
            </div>);
        })

    }

    render(){
        return(<div className = 'projects-container'>
        <h1 className = 'title'>/Projects</h1>
        <content className = 'cards-container'>
            {this.displayProjects()}        
        </content>


        
        </div>);
    }
}

export default Projects;