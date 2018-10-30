import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Notes from './Notes';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Menu/>
                <BrowserRouter>
                    <Notes/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
