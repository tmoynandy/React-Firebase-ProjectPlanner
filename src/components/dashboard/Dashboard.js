import React, {Component} from 'react';
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
//redirect
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render (){
        //console.log(this.props)
        const {projects, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6 ">
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
    console.log(state.firestore.ordered.projects)
    return {
        //grabbing projects from firestore
        projects : state.firestore.ordered.projects,
        //grabbing the auth status
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection : 'projects'}
    ])
)(Dashboard)