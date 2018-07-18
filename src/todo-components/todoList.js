import React, { Component } from 'react';
import Todo from './todo';
class TodoList extends Component {
    state = {
        list: [],
        handleDelete: () => {console.log("not defined handleDelete")},
        handleDone: () => {console.log("not defined handleDone")}
    }

    render() {
        const {list, handleDelete, handleDone} = this.props;
        const todos = list.map(item =>
            <Todo key = {item.id} info={item} onDelete={handleDelete} onDone ={handleDone} />
        )
        return (
            <div> 
                {todos}
            </div>

        );
    }
}

export default TodoList;