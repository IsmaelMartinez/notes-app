import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './NotesApp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
    <div>
        <div className="container-fluid bg-dark">
            <h1 className="text-center display-1 text-white">Notes App</h1>
            <hr/>
        </div>
        <p></p>
        <div className="container-fluid">
            <BrowserRouter>
                <Route path="/" component={NotesApp}/>
            </BrowserRouter>
        </div>
    </div>
), document.getElementById('root'));

registerServiceWorker();


/*
 Main things still TODO:

 add tests
 package and send. (github??)`
 autoselect 1st element if there is one.
 */