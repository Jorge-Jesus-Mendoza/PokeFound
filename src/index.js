import React from 'react';
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client';
import Inicio from './components/Inicio';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
//import reducers from './reducers/RooterReducers';
import Store from './reducers/Store';

const container= document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
/* 
const Store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk)
)); */


root.render( <Provider store={Store}>
            

                <App/>
            
            </Provider>)
