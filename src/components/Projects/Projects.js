import React, {Component} from 'react';

class Projects extends Component {
    constructor(){
        super();


    this.displayProjects = this.displayProjects.bind(this);
    }

    displayProjects(){
        const projects = [{ title: "Artifact Fine Goods", img: "image", desc: "Artifact is a fictional fullstack e-commerce website" }, { title: "LookBook", img: "image", desc: "A full-stack book search application." }, { title: "Data Store App", img: "image", desc: "An app that replicates a physical filing cabinet for storing important things." }, { title: "Group Project", img: "image", desc: "A project that I worked on with a team of n other developers." }, { title: "name", img: "image", desc: "desc" }];
        

        return projects.map((curr, index) => {
            return(<div className = 'card' key = {index}>
            <h1 className = 'card-title'>{curr.title}</h1>
            <p>{curr.desc}</p>
            
            </div>
            );
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