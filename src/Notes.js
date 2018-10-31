import {Component} from "react";
import React from "react";
import './App.css';

const Notebooks = {
    Notebooks: [
        {title: 'notebook1',Note_list: [
                {head: '1note1', text: '1text is notebook1',date: 'xx.xx.xxxx'},
                {head: '11note2', text: '1this text of notebook2',date: 'yy.xx.xxxx'},
                {head: '111note3', text: '1toxttext',date: 'xx.zz.xxxx'},
            ]},
        {title: 'notebook2',Note_list: [
                {head: '222note1', text: '2text is notebook1',date: 'xx.xx.rrxx'},
                {head: '22note2', text: '2this text of notebook2',date: 'yy.xx.rrxx'},
                {head: '2note3', text: '2toxttext',date: 'xx.zz.rrxx'},
                {head: '2note3', text: '2toxttext',date: 'xx.zz.rrxx'},
            ]},
        {title: 'notebook3',Note_list: [
                {head: '33note1', text: '3text is notebook1',date: 'xx.xx.eexx'},
                {head: '333note2', text: '3this text of notebook2',date: 'yy.xx.eexx'},
                {head: '3note3', text: '3toxttext',date: 'xx.zz.xeex'},
            ]}
    ],
    get: function(id) {
        const isPlayer = p => p.title === id;
        return this.Notebooks.find(isPlayer)
    }
};

const Notes = (props) =>{
    return (
        <div className="notes">
            <div className="notes-head">
                <h2>{Notebooks.get(props.match.params.note).title} </h2>
                <h5>{Notebooks.get(props.match.params.note).Note_list.length} notes</h5>
            </div>
            <div className="notes-body">
                {Notebooks.get(props.match.params.note).Note_list.map(p => (<Note text={p.text} head={p.head} date={p.date}/>))}
            </div>
        </div>
    );
};

class Note extends Component {
    render() {
        return(
            <div className="note">
                <h4>{this.props.head}</h4>
                <h5>{this.props.text}</h5>
                {this.props.date}
            </div>
        )
    }
}

export default Notes;