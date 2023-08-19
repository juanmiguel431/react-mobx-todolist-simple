import DataStore from './data-store/data-store';
import UiStore from './ui-store/ui-store';

export default class RootStore {
  private dataStore: DataStore;
  private uiStore: UiStore;
  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UiStore(this);
  }
}
