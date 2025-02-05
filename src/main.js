import './style.css';
import { App } from './todos/app';

import todoStore from './store/todo.store';

console.log(todoStore.initStore())

App('#app');