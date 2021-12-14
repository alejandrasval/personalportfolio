import "./ProjectList.css"
import Projects from "../projects/Projects"
import {projects} from "../../data"

const ProjectList = () => {
    return (
        <div className="projectList">
            <div className="projectList-text">
                <h1 className="projectList-title">Meraki 👩‍🎨</h1>
                <p className="projectList-description">(v.) To do something with soul, creativity or love; to put something of yourself into your work.</p>
            </div>
            <div className="projectList-catalogue">
                {projects.map((element) => (
               <Projects key={element.id} img={element.img} link={element.link}/> 
                ))}
            </div>
        </div>
    )
}

export default ProjectList
