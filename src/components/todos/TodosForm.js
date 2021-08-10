import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';

const TodosForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [editrender, setEditRender] = useState(false)

    if (props.mode === 'edit' && !editrender) {
        setNewTitle(props.todos[0].title);
        setEditRender(true);
    }

    const newTitleHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const addNewTitleHandler = () => {
        let nTitle = newTitle
        setNewTitle('')
        setEditRender(false)
        return props.addElement(nTitle)
    }


    let btnString = 'Add';
    if (props.mode === 'edit') {
        btnString = 'Edit'
    }
    return (
        <div className='todos-form'>
            <div className='todos-form_submit'>
                <button className='btn'
                    onClick={addNewTitleHandler}
                    disabled={newTitle.trim() ? false : true}
                >{btnString}</button>
            </div>
            <div className='todos-form_form'>
                <input type='text'
                    placeholder='...Add your tasks'
                    onChange={newTitleHandler}
                    value={newTitle}
                />
            </div>
            <div className='todos-form_icon'>
                <FeatherIcon icon="circle"
                    onClick={props.addUncompleleteHandler}
                />
            </div>

        </div>
    )
}

export default TodosForm
