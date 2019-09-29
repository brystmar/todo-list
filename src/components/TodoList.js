import React from 'react'
import TodoItem from './TodoItem'
import TodoData from './todosData'

function TodoList() {
    // Define the prop
    const TodoListFull = TodoData.map(item => <TodoItem key={item.id}
                                                        item={item}/>);

    return (
        <div className="todo-list">
            {TodoListFull}
        </div>
    )
}

export default TodoList
