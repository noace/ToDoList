import React from 'react';
import LI from './li_jsx';
class ToDoAndDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_num: 0,
            done_num: 0
        };
    }

    handleToDo = () => {
        this.setState({});
    };

    handleToDoNum = () => {
        this.setState({});
    };

    render() {
        return (
            <section>
                <h2>
                    正在进行
                    <span id="todo_num" onChange={this.handleToDoNum}>0</span>
                </h2>
                <ol id="todo_ol" onChange={this.handleToDo}>
                    {this.props.text ? <LI text={this.props.text}/> : ''}
                    <li>{this.props.bool}</li>
                </ol>

                <h2>
                    已经完成
                    <span id="done_num">0</span>
                </h2>
                <ul id="done_ul">
                </ul>
            </section>
        );
    }
}

export default ToDoAndDone;