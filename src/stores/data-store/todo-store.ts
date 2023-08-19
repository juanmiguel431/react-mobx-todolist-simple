import RootStore from '../root-store';
import { ObservableTodo } from './observables/todo';
import { makeObservable, observable } from 'mobx';

export default class TodoStore {
  public items: ObservableTodo[] = [];
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable
    })
  }
}
