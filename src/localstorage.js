const STORAGE_KEY = 'todomvc-app-react'

export const saveLocalStorage = todos => {
    console.log('save')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

export const getLocalStorage = () => {
    console.log('get')
    JSON.parse(localStorage.getItem(STORAGE_KEY))
}
