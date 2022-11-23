import React, {Component} from 'react';
import './index.css'

class Header extends Component {
    keyUp=(e)=>{
        if(e.key !== 'Enter') return
        if(e.target.value.trim() === '') return
        const todo = {id:Date.now(),name:e.target.value,done:false}
        this.props.todosChange(todo)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input  onKeyUp={this.keyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;