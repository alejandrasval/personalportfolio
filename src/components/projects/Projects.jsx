import "./Projects.css"

const Projects = ({img,link}) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>
        </div>
    )
}

export default Projects;
