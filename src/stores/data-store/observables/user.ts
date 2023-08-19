import { User } from '../../../models/data';
import { makeObservable, observable } from 'mobx';

export class ObservableUser implements User {
  public Id: number = 0;
  public Name: string | null = null;

  constructor() {
    makeObservable(this, {
      Id: observable,
      Name: observable,
    })
  }
}
