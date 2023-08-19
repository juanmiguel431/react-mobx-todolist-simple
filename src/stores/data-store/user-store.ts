import RootStore from '../root-store';
import { makeObservable, observable } from 'mobx';
import { ObservableUser } from './observables/user';

export default class UserStore {
  items: ObservableUser[] = [];
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable
    });
  }
}
