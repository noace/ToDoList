import React from 'react';

class HeaderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            bool: false,
        };
    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value,
            bool: true,
        });
    };
    upload_text = () => {
        this.props.getData(this.state.text,this.state.bool);
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                text: e.target.value,
                bool: e.target.value
            });
            this.upload_text();
            this.setState({text: ''});
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
                    />
                </section>
            </header>
        );
    }
}

export default HeaderInput;