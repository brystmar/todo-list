import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item" id={"todo-item-" + props.item.id}>
            <p>
                <input type="checkbox"
                       checked={props.item.completed}
                       className={"todo-item-checkbox-" + props.item.id}/>
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem
