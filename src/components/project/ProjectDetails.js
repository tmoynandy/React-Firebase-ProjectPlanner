import React from 'react'

function ProjectDetails(props) {
    console.log(props.match.params.id)
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title- {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iure laudantium libero commodi ratione quis qui magni dolore nisi. Soluta debitis assumenda ullam veniam quasi voluptates explicabo adipisci illo itaque.</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Tahnumoy</div>
                    <div>2nd july 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
