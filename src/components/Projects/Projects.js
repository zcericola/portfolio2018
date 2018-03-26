import React, {Component} from 'react';

class Projects extends Component {
    constructor(){
        super();


    this.displayProjects = this.displayProjects.bind(this);
    }

    displayProjects(){
        const projects = [{ title: "Artifact Fine Goods", img: "image", desc: "Artifact is a fictional fullstack e-commerce website" }, { title: "name", img: "image", desc: "desc" }, { title: "name", img: "image", desc: "desc" }, { title: "name", img: "image", desc: "desc" }, { title: "name", img: "image", desc: "desc" }, { title: "name", img: "image", desc: "desc" }, { title: "name", img: "image", desc: "desc" }];

        return projects.map((curr, index) => {
            return(<div className = 'card'>
            
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