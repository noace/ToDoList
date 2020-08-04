import React from 'react';
class ToDoAndDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_num: 0,
            done_num: 0,
        };
    }
    handleToDo = () => {

    };
    handleToDoNum = () => {

    };

    del = (e) => {

        const del_item = e.currentTarget;
        console.log(del_item.parentElement);
        // console.log(del_item.parentElement.getAttribute(key));
        console.log(del_item.previousElementSibling)
        console.log(del_item.previousElementSibling.getAttribute('index'))
        console.log(del_item.previousElementSibling.innerHTML)
        const results = this.props.todoItems.filter((item, index) => {
            console.log(item)
            return !(item == del_item.previousElementSibling.innerHTML && index == del_item.previousElementSibling.getAttribute('index'));
        });
        console.log(results)
        this.props.updateTodoItems(results);
    };

    handleCheckBox = (e) => {
        if(e.currentTarget.checked){
            console.log(this.props.doneItems)
            this.props.doneItems.push(e.currentTarget.nextElementSibling.innerHTML)
            this.props.updateDoneItems(this.props.doneItems)
            this.props.updateTodoItems(this.props.todoItems.filter((item, index)=>{
                return !(item == e.currentTarget.nextElementSibling.innerHTML && index == e.currentTarget.nextElementSibling.getAttribute('index'))
            }))
        }else{
            this.props.todoItems.push(e.currentTarget.nextElementSibling.innerHTML)
            this.props.updateTodoItems(this.props.todoItems)
            this.props.updateDoneItems(this.props.doneItems.filter((item, index)=>{
                return !(item == e.currentTarget.nextElementSibling.innerHTML && index == e.currentTarget.nextElementSibling.getAttribute('index'))
            }))
        }
    };

    render() {
        console.log(this.props.todoItems, 'todooooooooo')
        console.log(this.props.doneItems, 'doneeeeeeee')
        return (

            <section>
                <h2>
                    正在进行
                    <span id="todo_num">0</span>
                </h2>
                <ol id="todo_ol">
                    {this.props.todoItems.map((li, index)=>{
                        console.log(li, index);
                        return <li key={index}>
                            <input type="checkbox" onChange={(e)=>this.handleCheckBox(e)}/>
                            <p index={index}>{li}</p>
                            {/*<a href=" ">-</a>*/}
                            <button onClick={this.del}>del</button>
                        </li>
                    })}
                </ol>
                <h2>
                    已经完成
                    <span id="done_num">0</span>
                </h2>
                <ul id="done_ul">
                    {/*{this.props.bool && this.props.li}*/}
                    { this.props.doneItems.map((li,index)=>{
                        return <li key={index}>
                            <input type="checkbox" onChange={(e)=>this.handleCheckBox(e)}/>
                            <p index={index}>{li}</p>
                            {/*<a href=" ">-</a>*/}
                            <button onClick={this.del}>del</button>
                        </li>;
                    })}
                </ul>
                {/*{this.state.bool
                    ? <><h2>
                        正在进行
                        <span id="todo_num">0</span>
                    </h2>
                        <ol id="todo_ol">
                            {this.props.li}
                        </ol>
                    </>
                    : <><h2>
                        已经完成
                        <span id="done_num">0</span>
                    </h2>
                        <ul id="done_ul">
                            {this.props.li}
                        </ul>
                    </>}*/}
            </section>
        );
    }
}
export default ToDoAndDone;