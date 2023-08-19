import RootStore from '../root-store';
import { ObservableTodo } from './observables/todo';
import { action, makeObservable, observable } from 'mobx';

export default class TodoStore {
  public items: ObservableTodo[] = [];
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable,
      removeRange: action,
      add: action
    })
  }

  public removeRange(userId: number) {
    this.items = this.items.filter(t => t.userId !== userId);
  }

  public add(userId: number, name: string) {
    const item = new ObservableTodo(name, userId);
    this.items.push(item);
  }
}
