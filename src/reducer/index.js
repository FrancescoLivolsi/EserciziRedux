import counterReducer from "./Counter";
import loggedReducer from "./islogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default rootReducer;