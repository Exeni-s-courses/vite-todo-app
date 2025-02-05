import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todo: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del infinito'),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('Init Store 🥑');
}

const loadStore = () => {
    throw new Error('Not implemented');
}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
}


/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}


/**
 * 
 * @param {String} todoId Todo identifier 
 */
const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}


const deleteCompleted = () => {
    throw new Error('Not implemented');
}


const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}


const getCurrentFilter = () => {
    throw new Error('Not implemented');
}


export default {
    initStore,
    loadStore,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    addTodo,
    toggleTodo
}