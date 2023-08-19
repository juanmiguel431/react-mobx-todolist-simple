// # Each todo should have:
//     - id
//     - name
//     - isCompleted
// # Each todo should be able to move between completed and not completed state
// # Each todo should be able to update the name
// # Print Log on ObservableTodo completed state change
// # Add ability to add and remove todo
// # Add ability to get list of completed todos and not completed todos
// # Print log every time new todo is added or removed with the current status: total, completed, incomplete
// # Print log only once when all todos are completed

import { autorun } from 'mobx';
import { ObservableTodoList } from './stores/data-store/observables/todo';

const todoList = new ObservableTodoList();


const autorunDisposer = autorun(() => {
  // console.log()
});

todoList.add('Task 1', '1');
todoList.add('Task 2', '1');

const task1 = todoList.getByName('Task 1');
const task2 = todoList.getByName('Task 2');

if (task1) {
  task1.toggleCompletedState();
}

if (task2) {
  task2.toggleCompletedState();
}

todoList.remove('Task 1');

autorunDisposer();

// to make peace with typescript :D - remove when u start
export {};
