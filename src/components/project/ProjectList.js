import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) =>{
    return (
        <div className="project-list">
            {projects && projects.map(project =>{
                return(
                    <ProjectSummary project = {project} key = {project.id}/>
                )
            })}
            {/* <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/> */}
        </div>

    )
}

export default ProjectList