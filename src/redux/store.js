import {createStore,applyMiddleware,compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || COMPOSE

export default store;