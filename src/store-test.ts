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

const store = new RootStore();
store.data.user.add('Juan Miguel');
store.data.user.add('Antonio Marte');


export {};
