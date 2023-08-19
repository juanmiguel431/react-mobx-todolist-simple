import RootStore from '../root-store';
import UserStore from './user-store';
import TodoStore from './todo-store';

export default class DataStore {
  private userStore: UserStore;
  private todoStore: TodoStore;

  constructor(rootStore: RootStore) {
    this.userStore = new UserStore(rootStore);
    this.todoStore = new TodoStore(rootStore);
  }
}
