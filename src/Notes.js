import {Component} from "react";
import {Route, Switch} from "react-router-dom";
import React from "react";
import './App.css';



class Notes1 extends Component {
    render() {
        return (
            <div>
                1
            </div>
        );
    }
}


class Notes2 extends Component {
    render() {
        return (
            <div>
                2
            </div>
        );
    }
}


class Notes3 extends Component {
    render() {
        return (
            <div>
                3
            </div>
        );
    }
}


class Notes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Notes1}/>
                <Route path='/roster' component={Notes2}/>
                <Route path='/schedule' component={Notes3}/>
            </Switch>
        );
    }
}

export default Notes;