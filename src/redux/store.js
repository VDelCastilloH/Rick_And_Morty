import {createStore,applyMiddleware,compose} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

// window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || COMPOSE

export default store;