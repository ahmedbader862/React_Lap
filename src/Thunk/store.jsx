import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import changeThemeReducer from "./reduscer/Themreducer";
import {thunk} from "redux-thunk";
import ADD_MOVIES from "./reducer";


const myStore = createStore(
    ADD_MOVIES,
    composeWithDevTools(applyMiddleware(thunk))  
);

export default myStore;
