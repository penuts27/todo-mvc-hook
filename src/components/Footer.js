import { useContext, useMemo } from 'react'
import { TodoContext } from '../context'
import { reducers } from '../reducers/useTodos'


const Footer = ({visibility, setVisibility}) => {
    const {todos, setTodos} = useContext(TodoContext)

    const remaining = useMemo(() => {
        // 返傳active todos
        return todos.reduce((pre,todo) => !!todo.completed ? pre : pre + 1, 0)
    },[todos])
    const itemWord = remaining === 1 ? 'item' : 'items'

    const handleCompletedItemDelete = () => {
        setTodos(reducers.deleteCompleted(todos))
    }
    return (
        <footer className="footer">
            <span className="todo-count"> <strong>{remaining || 0}</strong> {itemWord} left </span>
            <ul className="filters">
            <li>
                <a className={visibility === 'all' ? 'selected' : ''} href="#/all" onClick={() => setVisibility('all')}>All</a>
            </li>
            <li>
                <a className={visibility === 'active' ? 'selected' : ''} href="#/active" onClick={() => setVisibility('active')}>Active</a>
            </li>
            <li>
                <a className={visibility === 'completed' ? 'selected' : ''} href="#/completed" onClick={() => setVisibility('complete')}>Completed</a>
            </li>
            </ul>
            {remaining !== todos.length && <button className="clear-completed" onClick={handleCompletedItemDelete}>
            Clear completed
            </button>}
      </footer>
    )
}
export default Footer