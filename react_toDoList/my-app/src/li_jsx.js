import React from 'react';

export default class LI extends React.Component {
    render() {
        return <li>
            <input type="checkbox" />
            <p>{this.props.text}</p>
            <a href=" ">-</a>
        </li>
    }
}