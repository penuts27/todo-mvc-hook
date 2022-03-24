import {useState, useMemo} from 'react';
import { filters } from './reducers/useTodos'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import { TodoContext } from './context'
import 'todomvc-app-css/index.css'
import { getLocalStorage } from './localstorage';
import { useEffect } from 'react'

import './App.css';

function App() {
  const [todos, setTodos] = useState(getLocalStorage() || [])
  const [visibility, setVisibility] = useState('all')
  // 拿檔案
  // useEffect(() => {
  //   console.log(getLocalStorage())
  //   !!getLocalStorage() && setTodos(getLocalStorage())
  // },[])
  return (
    <div id="App">
      <section className="todoapp">
        <TodoContext.Provider value={{todos, setTodos}}>
          <Header/>
          <TodoList visibility={visibility}/>
          {!!todos && <Footer visibility={visibility} setVisibility={setVisibility}/>}
        </TodoContext.Provider>
      </section>
    </div>
  );
}

export default App;
