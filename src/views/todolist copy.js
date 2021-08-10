import React, { Component } from 'react'

//components
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'

/////////////////////////////////////class component/////////////////////////////////////
class Todolist extends Component {
    // const initialState = [
    //     { id: '1', title: 'task react', done: false },
    //     { id: '2', title: 'task angular', done: true },
    //     { id: '3', title: 'cooking', done: false },
    //     { id: '4', title: 'drawing', done: true },

    // ]
    initialState = localStorage.getItem("Todos") ? JSON.parse(localStorage.getItem("Todos")) : [];


    state = {
        todos: this.initialState,
        activeTodo: {},
        mode: 'add'
    }

    //عشان اعملهم ريندير فى كل مره
    render() {

        let { todos, activeTodo, mode } = this.state
        const setToLocal = (todos) => {
            localStorage.setItem("Todos", JSON.stringify(todos))
        }

        const setTodos = (todos) => {
            this.setState({ todos })
        }
        const setActiveTodo = (todo) => {
            this.setState({ activeTodo: todo })
        }
        const setMode = (mode) => {
            this.setState({ mode })
        }

        const changeElement = (id) => {
            const curElement = [...todos];
            const newTodos = curElement.map((el) => {
                if (el.id === id) {
                    el.done = !el.done
                    return el
                }
                return el
            })
            setToLocal(newTodos);
            setTodos(newTodos);
        }


        const deleteElement = (id) => {
            const curElement = [...todos];
            const newTodos = curElement.filter((el) => el.id !== id);
            setToLocal(newTodos);
            setTodos(newTodos);
        }

        const addElement = (title) => {
            if (mode !== 'edit') {
                const newElement = {
                    id: Date.now(),
                    title: title,
                    done: false
                }
                const newTodos = [...todos, newElement]
                setToLocal(newTodos)
                setTodos(newTodos)
            }
            else {
                const curTodos = [...todos]
                const newTodos = curTodos.map((el) => {
                    if (el.id === activeTodo.id) {
                        el.title = title;
                        return el;
                    }
                    return el;
                })
                setToLocal(newTodos)
                setTodos(newTodos);
                setActiveTodo({});
                setMode('add')

            }
        }

        const addUncompleleteHandler = () => {
            if (mode === 'not-done') {
                setMode('add')
            } else {
                setMode('not-done')
            }
        }
        let currentTodos = [...todos]


        if (mode === 'not-done') {
            currentTodos = currentTodos.filter((todo) => !todo.done)
        }

        const editTodo = (todo) => {
            setMode('edit')
            setActiveTodo(todo)
        }
        return (
            <main>
                <div className='container'>
                    <div className='todos'>
                        <TodosForms
                            addElement={addElement}
                            addUncompleleteHandler={addUncompleleteHandler}
                            todos={mode !== 'edit' ? currentTodos : [activeTodo]}
                            mode={mode}
                        />
                        <Todos todos={mode !== 'edit' ? currentTodos : [activeTodo]}
                            changeElement={changeElement}
                            deleteElement={deleteElement}
                            editTodo={editTodo}
                        />
                    </div>

                </div>
            </main>

        )
    }
}

export default Todolist
