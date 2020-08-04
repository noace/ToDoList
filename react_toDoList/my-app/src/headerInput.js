import React from 'react';
class HeaderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todoItems: [],
            doneItems: [],
            bool: false
        };
    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };
    uploadText = () => {
        this.props.getData(this.state.todoItems, this.state.doneItems, this.handleCheckBox, this.updateTodoItems, this.updateDoneItems);
    };

    createLI = () => {
        // let new_li = <li>
        //     <input type="checkbox" onChange={(e)=>this.handleCheckBox(e)}/>
        //     <p>{this.state.text}</p>
        //     <a href=" ">-</a>
        //     <button onClick={this.del}>del</button>
        // </li>;
        this.state.todoItems.push(this.state.text);
    };

    updateTodoItems = (todoItems)=> {
        console.log(todoItems, 'todoItems""""""')
        this.setState({todoItems}, this.uploadText)
    };

    updateDoneItems= (doneItems)=> {
        console.log(doneItems, 'doneItems----')
        this.setState({doneItems}, this.uploadText)
    };


    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                text: e.target.value,
                bool: false
            }, ()=>{
                this.createLI();
                this.uploadText();
                this.setState({text: ''})
            });
            // this.setState({text: ''});
        }
    };

    render() {
        return (
            <header>
                <section>
                    <div className="text">
                        ToDoList
                    </div>
                    <input id="header_input"
                           value={this.state.text}
                           placeholder="添加ToDo"
                           onChange={this.handleChange}
                           onKeyUp={this.handleKeyUp}
                           handleCheckBox={this.handleCheckBox}
                    />
                </section>
            </header>
        );
    }
}
export default HeaderInput;