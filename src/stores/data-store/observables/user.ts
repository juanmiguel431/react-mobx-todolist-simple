import { User } from '../../../models/data';
import { action, computed, makeObservable, observable } from 'mobx';
import RootStore from '../../root-store';
import { v4 as uuidv4 } from 'uuid';

export class ObservableUser implements User {
  public id: string = uuidv4().replace(/-/g, '');
  public name: string | null = null;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      id: observable,
      name: observable,
      todos: computed,
      updateName: action
    });
  }

  get todos() {
    return this.rootStore.data.todo.items.filter(t => t.userId === this.id);
  }

  public updateName(name: string) {
    this.name = name;
  }
}
