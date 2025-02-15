import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import changeThemeReducer from "./reduscer/Themreducer";
import ADD_MOVIES from "./reduscer/Favreducer";


const myStore = createStore(
    ADD_MOVIES,
    composeWithDevTools() 
);

export default myStore;
