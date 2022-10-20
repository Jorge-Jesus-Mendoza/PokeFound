import React from 'react';
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import Store from './reducers/Store';

const container= document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render( <Provider store={Store}>
            

                <App/>
            
            </Provider>)
