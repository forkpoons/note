import React, { Component } from 'react';
import './App.css';

const notebooks = [
    {
        text: 'notebook123',
        URL: '/notebook1'
    },
    {
        text: 'notebook2 3ere',
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
                    <div className="new-note-img"><span className="new-note-img1"></span><span className="new-note-img1"></span> </div>
                    <div className="new-note-text"> New note</div>

                </div>
                <ul className="menu-list">
                    <li>All notes</li>
                    <li>Notebook</li>
                    <ul>
                        <NotebookList items={this.state.items}/>
                    </ul>
                </ul>
                <input type="button" value="Add"/>
            </div>
        )
    }
}

class NotebookList extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <TodoList items={this.props.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.props.text}
                    />
                    <button>
                        Add #{this.props.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
    handleChange(e) {
        this.setState({ text: e.target.value });alert(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.text.length) {
            return;
        }
        const newItem = {
            text: this.props.text,
            id: Date.now(),
            URL: '/'+this.state.text
        };
        this.setState(state => ({

            items: this.props.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}><a href={item.URL}>{item.text}</a></li>
                ))}
            </ul>
        );
    }
}



export default Menu;
