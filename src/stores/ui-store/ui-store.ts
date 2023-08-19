import RootStore from '../root-store';
import ObservableGlobalView from '../data-store/observables/ui/global-view';

export default class UiStore {
  public globalView: ObservableGlobalView;

  constructor(rootStore: RootStore) {
    this.globalView = new ObservableGlobalView(rootStore);
  }
}
