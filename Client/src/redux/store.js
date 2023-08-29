// import {createStore,applyMiddleware} from "redux";
// import {composeWithDevTools} from "redux-devTools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducer";

// //const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// // window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || COMPOSE

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer.js";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;