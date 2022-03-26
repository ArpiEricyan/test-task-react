import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import CatsReducer from "./cats-models/reducer";

const rootReducers = combineReducers({
    cats:CatsReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;