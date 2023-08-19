import RootStore from '../root-store';
import ObservableGlobalView from '../data-store/observables/ui/global-view';

export default class UiStore {
  public item: ObservableGlobalView;

  constructor(rootStore: RootStore) {
    this.item = new ObservableGlobalView(rootStore);
  }
}
