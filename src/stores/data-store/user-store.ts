import RootStore from '../root-store';
import { action, makeObservable, observable } from 'mobx';
import { ObservableUser } from './observables/user';
import { User } from '../../models/data';

export default class UserStore {
  public items: ObservableUser[] = [];
  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable,
      add: action,
    });
  }

  public add(user: User) {
    const observableUser = new ObservableUser(this.rootStore);
    Object.assign(observableUser, user);
    this.items.push(observableUser);
  }

  public remove(id: number) {
    const index = this.items.findIndex(u => u.id === id);
    if (index === -1) return;

    const user = this.items[index];
    this.rootStore.data.todo.removeRange(user.id);
    this.items.splice(index, 1);
  }
}
