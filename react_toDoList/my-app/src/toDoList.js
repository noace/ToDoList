import React from 'react';
import HeaderInput from './headerInput';
import ToDoAndDone from './toDoAndDone';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            doneItems: [],
            bool: '',
            handleCheckBox: null,
            updateTodoItems: null,
            updateDoneItems: null,
        };
    }

    getData = (todoItems,doneItems, handleCheckBox, updateTodoItems, updateDoneItems) => {
        console.log(todoItems, 1111);
        console.log(doneItems, 2222);
        this.setState({
            todoItems,
            doneItems,
            handleCheckBox,
            updateTodoItems,
            updateDoneItems,
        });
    };

    render() {
        return (
            <React.Fragment>
                <HeaderInput getData={this.getData}/>
                <ToDoAndDone
                    todoItems={this.state.todoItems}
                    doneItems={this.state.doneItems}
                    bool={this.state.bool}
                    handleCheckBox={this.state.handleCheckBox}
                    updateTodoItems={this.state.updateTodoItems}
                    updateDoneItems={this.state.updateDoneItems}
                />
            </React.Fragment>
        );
    }
}
export default ToDoList;

