import RootStore from '../root-store';
import UserStore from './user-store';
import TodoStore from './todo-store';

export default class DataStore {
  public user: UserStore;
  public todo: TodoStore;

  constructor(rootStore: RootStore) {
    this.user = new UserStore(rootStore);
    this.todo = new TodoStore(rootStore);
  }
}
