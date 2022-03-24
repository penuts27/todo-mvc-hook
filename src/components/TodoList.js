import TodoItem from './TodoItem'
import {useState, useContext, useMemo, useEffect} from 'react'
import { TodoContext } from '../context'
import { reducers } from '../reducers/useTodos' 
import { filters } from '../reducers/useTodos'
import { saveLocalStorage } from '../localstorage'



const TodoList = ({visibility}) => {
  const [text, setText] = useState('')
  const {todos, setTodos} = useContext(TodoContext)
  // 以filter之後的資料顯示
  const filtersTodos = useMemo(() => filters[visibility](todos),[visibility,todos])

  // 監聽存檔
  useEffect(() => {
    console.log('save1', todos)
    saveLocalStorage(todos)
  },[todos])

  const handleInputType = (e) => {
      setText(e.target.value)
  }
  const handleKeyUp = (todoContent) => {
    return (e) => {
      if(e.keyCode === 13) {
        // 若有值才進行處理
        const title = todoContent && todoContent.trim()
        if(!title) return
        setTodos(reducers.addTodo(todos, title))
        setText('')
      }
    }
  }
  
  return (
    <>
      <input 
      type="text" 
      className="new-todo" 
      autoFocus 
      placeholder='需要做什麼？' 
      onChange={handleInputType}
      onKeyUp={handleKeyUp(text)}
      value={text}
      />
      <main className="main">
          <input id="toggle-all" type="checkbox" className="toggle-all"/>
          <label htmlFor="toggle-all"></label>
          <ul className="todo-list">
            {filtersTodos.map(todo => 
            <TodoItem 
            todo={todo} 
            key={todo.id}
            />)}
          </ul>
      </main>
    </>
  )
}
export default TodoList