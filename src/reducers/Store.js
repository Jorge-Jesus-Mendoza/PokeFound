import { createStore } from "redux";
import RootReducers from "./RootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk"
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(RootReducers, composeEnhancers( applyMiddleware(thunk) ));

export default Store