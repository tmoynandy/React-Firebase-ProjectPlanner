export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Tanumoy',
            authorLastName : 'Nandy',
            authorId : 12345,
            createdAt : new Date()
        }).then(()=>{
            //then dispatch action to reducer
            //dispatch goes to projectReducer
            dispatch({type : 'CREATE_PROJECT', project});
        }).catch((err)=>{
            dispatch({type : 'CREATE_PROJECT_ERROR', err});
        })
        
    }
};