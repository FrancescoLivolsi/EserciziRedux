const counterReducer = (state = 0, actions) => {
    switch(actions.type){
        case "incrementa":
            return state+1;
        case "decrementa":
            return state -1;
        default:
            return state;
    }
}

export default counterReducer;