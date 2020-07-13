const loggedReducer = (state = false, actions) => {
    switch(actions.type){
        case "Sign_in":
            return state=true;
        case "Sign_out":
            return state=false;
        default:
            return state;
    }
}

export default loggedReducer;