import { v4 as uuidv4 } from 'uuid'

const newTodo = label => ({
    completed: false,
    id: uuidv4(),
    title: (label || '').trim()
})

export const reducers = {
    // cerate a new item
    addTodo: (state, label) => ([
        newTodo(label),
        ...state
    ]),
    // delete todo by id
    deleteTodo: (state, id) => {
        return state.filter(todo => todo.id !== id)
    },
    deleteCompleted: (state) => {
        return state.filter(todo => !todo.completed)
    },
    // toggle an item completed
    toggleDone: (state, id) => state.map(todo => todo.id === id ? {
        ...todo,
        completed: !todo.completed
    } : todo ),
}
export const filters = {
    all: (state) => state,
    active: (state) => state.filter(todo => todo.completed),
    complete: (state) => state.filter(todo => !todo.completed),
}