import React from 'react';
import HeaderInput from './headerInput';
import ToDoAndDone from './toDoAndDone';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            bool: '',
        };
    }

    getData = (sub_text,sub_bool) => {
        this.setState({
            text: sub_text,
            bool: sub_bool
        });
    };

    render() {
        return (
            <React.Fragment>
                <HeaderInput getData={this.getData}/>
                <ToDoAndDone text={this.state.text} bool={this.state.bool}/>
            </React.Fragment>
        );
    }
}
export default ToDoList;

