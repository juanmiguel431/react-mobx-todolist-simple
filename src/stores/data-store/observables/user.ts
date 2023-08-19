import { User } from '../../../models/data';
import { makeObservable, observable } from 'mobx';

export class ObservableUser implements User {
  public id: number = 0;
  public name: string | null = null;

  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
    })
  }
}
