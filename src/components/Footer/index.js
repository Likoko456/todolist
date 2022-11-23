import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
    clear = () => {
        this.props.clearAll()
    }
    changeStatus = (e) => {
        this.props.changeAll(e.target.checked)
    }
    //已完成的个数
    render() {
        const { todos } = this.props
        // 统计有多少已经完成的
        const todoDone = todos.filter(item => { return item.done === true })
        let count = todoDone.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.changeStatus} checked={count === todos.length && todos.length>0} />
                </label>
                <span>
                    <span>已完成{count}</span> / 全部{todos.length}</span>
                <button className="btn btn-danger" onClick={this.clear}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;