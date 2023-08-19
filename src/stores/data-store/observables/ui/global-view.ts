import { GlobalView } from '../../../../models/ui';
import RootStore from '../../../root-store';
import { makeObservable, observable } from 'mobx';

export default class ObservableGlobalView implements GlobalView {
  public theme: string | null = null;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      theme: observable
    })
  }
}
