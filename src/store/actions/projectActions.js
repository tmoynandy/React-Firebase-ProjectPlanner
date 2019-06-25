export const createProject = (project) =>{
    return (dispatch, getState) =>{
        //make async call to database
        //then dispatch action to reducer
        //dispatch goes to projectReducer
        dispatch({type : 'CREATE_PROJECT', project});
    }
};