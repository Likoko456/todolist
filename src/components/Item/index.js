import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    state = {
        mouse: false
    }

    mouseEnter = () => {
        this.setState({
            mouse: true
        })
    }

    mouseLeave = () => {
        this.setState({
            mouse: false
        })
    }

    changeDone = (e,id) => {
        this.props.changeStatus(e.target.checked,id)
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }

    render() {
        const { id, name, done } = this.props
        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ccc' : '#fff' }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <label>
                    <input type="checkbox" checked={done} onChange={(e)=>{this.changeDone(e,id)}} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.deleteTodo(id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        );
    }
}

export default Item;