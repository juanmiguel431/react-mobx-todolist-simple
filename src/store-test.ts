// # Create a Root store with UI and Data stores
// # Add User Domain Object
// # Should Have Id + Name
// # Connect Todo to a User
// # We should be able to get all users todos
// # Add Users Domain Store
// # Add ability to add/remove users
// (remember that removing user will also remove all of his todos)
// # Add new todo for each user created
// # Add a UI store to indicate how many users(print names)
// and todos we have in total

import RootStore from './stores/root-store';
import { autorun } from 'mobx';

const store = new RootStore();

const disposer = autorun(() => {
  console.log( `UserCount: ${store.ui.globalView.userCount} TodoCount: ${store.ui.globalView.todoCount}`);
});

const id1 = store.data.user.add('Juan Miguel');
const id2 = store.data.user.add('Antonio Marte');

store.data.todo.add(id1, 'Task 1');
store.data.todo.add(id1, 'Task 2');
store.data.todo.add(id2, 'Task 3');

disposer();

export {};
