import React from 'react'
import FeatherIcon from 'feather-icons-react';

const Todo = (props) => {
    const { id, title, done } = props.todo
    return (
        <div className={done ? 'todos-todo done' : 'todos-todo'} >

            <div className='todos-todo_cta'>
                <div className='todos-todo_cta-edit'>
                    <FeatherIcon icon="edit" size='20'
                        onClick={() => props.editTodo(props.todo)}
                    />
                </div>
                <div className='todos-todo_cta-delete'>
                    <FeatherIcon icon="trash-2" size='20'
                        onClick={() => props.deleteElement(id)}
                    />
                </div>

            </div>

            <div className='todos-todo_text'>{title}</div>
            <div className='todos-todo_icon'>
                <FeatherIcon icon={done ? "check-circle" : "circle"}
                    onClick={() => props.changeElement(id)}
                />
            </div>

        </div>
    )
}

export default Todo
