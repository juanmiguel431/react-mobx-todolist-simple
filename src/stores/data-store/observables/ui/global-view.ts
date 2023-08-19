import { GlobalView } from '../../../../models/ui';
import RootStore from '../../../root-store';
import { computed, makeObservable, observable } from 'mobx';

export default class ObservableGlobalView implements GlobalView {
  public theme: string | null = null;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      theme: observable,
      userCount: computed,
      todoCount: computed,
    });
  }

  get userCount() {
    return this.rootStore.data.user.items.length;
  }

  get todoCount() {
    return this.rootStore.data.todo.items.length;
  }
}
