import { reducers } from '../reducers/useTodos' 
import {useContext} from 'react'
import { TodoContext } from '../context'

const TodoItem = ({todo}) => {
    const {todos, setTodos} = useContext(TodoContext)
    const onDeleteClicked = (todoId) => {
        return () => {
            const newTodos = reducers.deleteTodo(todos, todoId)
            setTodos(newTodos) 
        }
    }
    const onDone = (todoId) => {
        return () => {
            const newTodos = reducers.toggleDone(todos, todoId)
            setTodos(newTodos) 
        }
    }
    return (
        <li className={`todo ${todo.completed ? 'completed' : ''} `}>
            <div className="view">
            <input type="checkbox" className="toggle" onChange={onDone(todo.id)} checked={todo.completed}/>
            <label htmlFor="">{todo.title}</label>
            <button className="destroy" onClick={onDeleteClicked(todo.id)}></button>
            </div>
            <input type="text" className="edit" />
        </li>
    )
}
export default TodoItem