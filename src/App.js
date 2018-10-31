import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Notes from './Notes';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Menu/>
                    <Route path='/:note' component={Notes}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
