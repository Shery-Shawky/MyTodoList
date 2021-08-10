import React from 'react'

import Todo from './Todo'
const Todos = (props) => {
    return (
        <div className='todos-list'>
            {props.todos.map((todo) => {
                return (
                    <Todo todo={todo} key={todo.id}
                        changeElement={props.changeElement}
                        deleteElement={props.deleteElement}
                        editTodo={props.editTodo}
                    />
                )
            })}
            {props.todos.length === 0 ? (
                <h3 className='no-todos'>... There are no assignments at the moment </h3>
            ) : null}

        </div>
    )
}

export default Todos
