import React from 'react';
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client';
import Inicio from './components/Inicio';
import App from './App';




const container= document.getElementById('root')
const root = ReactDOMClient.createRoot(container)


root.render( <React.Fragment>

                <App/>

                </React.Fragment>)
