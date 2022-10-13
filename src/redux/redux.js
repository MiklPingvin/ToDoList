import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

let reducers = combineReducers({
    mainPage:reducer
});
const store = createStore(reducers,composeWithDevTools(
    applyMiddleware()
));

window.store = store;

export default store;