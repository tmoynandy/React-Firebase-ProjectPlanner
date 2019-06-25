import React from 'react';
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) =>{
    return (
        <div className="project-list">
            {projects && projects.map(project =>{
                return(
                    <Link to={'/project/'+project.id}>
                        <ProjectSummary project = {project} key = {project.id}/>
                    </Link> 
                )
            })}
            {/* <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/> */}
        </div>

    )
}

export default ProjectList