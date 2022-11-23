import React, { Component } from 'react';
import Header from "./components/Heder";
import List from "./components/List";
import Footer from "./components/Footer";
import './APP.css'

class App extends Component {
    state = {
        todos: [
            { id: '001', name: 'eat', done: true },
            { id: '002', name: 'sleep', done: false },
            { id: '003', name: 'play', done: false },
            { id: '004', name: 'work', done: true },
        ]
    }

    //添加todo，接收的是对象，然后放到数组最前面
    todosChange = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    //改变组件中的状态
    changeStatus = (done,id) => {
        const { todos } = this.state
        const newTodos = todos.map((item) => {
            if (item.id === id) return { ...item, done }
            else return item
        }
        )
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => { return todo.id !== id })
        this.setState({
            todos: newTodos
        })
    }

    clearAll = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => { return todo.done !== true })
        this.setState({
            todos: newTodos
        })
    }

    changeAll = (status) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done: status }
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header todos={this.state.todos} todosChange={this.todosChange}></Header>
                    <List todos={this.state.todos} changeStatus={this.changeStatus} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={this.state.todos} clearAll={this.clearAll} changeAll={this.changeAll}></Footer>
                </div>
            </div>
        );
    }
}

export default App;