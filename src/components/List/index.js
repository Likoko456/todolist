import React, {Component} from 'react';
import Item from "../Item";
import  './index.css'

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main" >
                {
                    todos.map(item=><Item key={item.id} {...item} changeStatus={this.props.changeStatus} deleteTodo={this.props.deleteTodo}/>)
                }
            </ul>
        );
    }
}

export default List;