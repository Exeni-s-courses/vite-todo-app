import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderPending, renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    DestroyButton: '.destroy',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 * @returns 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }

    // Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList);
    const todoClearCompleted = document.querySelector(ElementIDs.ClearCompleted);
    const filtersLis = document.querySelectorAll(ElementIDs.TodoFilters);

    // Listeners
    newDescriptionInput.addEventListener('Keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroyElement) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoClearCompleted.addEventListener('click', (event) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLis.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLis.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        })
    })

}