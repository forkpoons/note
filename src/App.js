import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const notebooks = [
    {
        name: 'notebook1'
    },
    {
        name: 'notebook2'
    },
    {
        name: 'notebook3'
    }
];

class NotebookList extends Component{
    render() {
        return (
            notebooks.map(function (item) {
                return(
                    <li>{item.name}</li>
                );
            })
      )
    }
}

class Menu extends Component{
    render() {
        return (
            <div className="menu">
                <div className="logo">
                    <span className="logo-img"> </span> Note
                </div>
                <div className="new-note">
                    <div className="new-note-img"><span className="new-note-img1"></span><span className="new-note-img1"></span> </div>
                    <div className="new-note-text"> New note</div>

                </div>
                <ul className="menu-list">
                    <li>All notes</li>
                    <li>Notebook</li>
                    <ul>
                        <NotebookList/>
                    </ul>
                </ul>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
      </div>
    );
  }
}

export default App;
