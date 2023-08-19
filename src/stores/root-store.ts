import DataStore from './data-store/data-store';
import UiStore from './ui-store/ui-store';

export default class RootStore {
  public data: DataStore;
  public ui: UiStore;
  constructor() {
    this.data = new DataStore(this);
    this.ui = new UiStore(this);
  }
}
