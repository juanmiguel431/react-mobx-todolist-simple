import { User } from '../../../models/data';
import { computed, makeObservable, observable } from 'mobx';
import RootStore from '../../root-store';

export class ObservableUser implements User {
  public id: number = 0;
  public name: string | null = null;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      id: observable,
      name: observable,
      todos: computed
    })
  }

  get todos() {
    return this.rootStore.data.todo.items.filter(t => t.userId === this.id);
  }

  public removeAllTodos() {

  }
}
