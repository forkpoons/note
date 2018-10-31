import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link} from "react-router-dom";
const notebooks = [
    {
        text: 'notebook1',
        URL: '/notebook1'
    },
    {
        text: 'notebook2',
        URL: '/notebook2'
    },
    {
        text: 'notebook3',
        URL: '/notebook3'
    }
];


class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = { items: notebooks, text: '' };
    }

    render() {
        return (
            <div className="menu">
                <div className="logo">
                    <span className="logo-img"> </span> Note
                </div>
                <div className="new-note">
                    <div className="new-note-img"><span className="new-note-img1"> </span><span className="new-note-img1"> </span> </div>
                    <div className="new-note-text"> New note</div>

                </div>
                <ul className="menu-list">
                    <li>All notes</li>
                    <li>Notebooks</li>
                        <TodoList items={this.state.items}/>
                </ul>
            </div>
        )
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}><Link to={item.URL} className="color-white"> {item.text}</Link></li>
                ))}
            </ul>
        );
    }
}



export default Menu;
