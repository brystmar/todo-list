import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item" id={"todo-item-" + props.item.id}>
            <p>
                <input type="checkbox"
                       className={"todo-item-checkbox-" + props.item.id}
                       checked={props.item.completed}
                       onChange={() => props.handleChange(props.item.id)} />
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem
