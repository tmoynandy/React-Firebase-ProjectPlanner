import React from 'react'

const ProjectSummary = ({project}) =>{
    return(
        <div className="container section project-summary">
            <div className="card z-depth-0 project-summary">
                <div className="card content grey-text text-darken-3">
                    <span className="card-title"> {project.title}</span>
                    <p>Posted by Tanu</p>
                    <p className="grey-text">20th June 3pm</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary