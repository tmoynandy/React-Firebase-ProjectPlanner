import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () =>{
    return (
        <ul className="right">
            <li><NavLink to = '/'>New Project</NavLink></li>
            <li><NavLink to = '/'></NavLink>Logout</li>
            <li><NavLink to = '/' className = 'btn btn-floating pink lighten-1'>Tanu</NavLink></li>
        </ul>
    )
}

export default SignedInLinks