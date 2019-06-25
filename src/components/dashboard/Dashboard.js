import React, {Component} from 'react';
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render (){
        //console.log(this.props)
        const {projects} = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

//this will attach a prop named projects to this component 
//the projecs property will return stuff on the state of the root reducer
//in the state of the root reducer, it will look for project
//the project in turn calls projectReducer, which returns the state
//in the state of the projectReducer, it will be in the projects object

const mapStateToProps = (state) =>{
    return {
        projects : state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)