const initState = {
    projects : [
        {id : '1', title : 'A new mern stack', content : 'blah blah blah'},
        {id : '2', title : 'A new mean stack', content : 'blah blah blah'},
        {id : '3', title : 'A new mevn stack', content : 'blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
    }
    return state
}

export default projectReducer