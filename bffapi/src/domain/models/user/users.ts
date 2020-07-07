import User from './user'

export default class Users {
  private _list: User[]

  public constructor(list?: User[]) {
    this._list = list || []
  }

  public get list(): User[] {
    return this._list
  }
}
