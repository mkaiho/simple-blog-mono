import UserId from './user-id'

export default class User {
  private readonly _id: UserId

  private _name: string

  public constructor(name: string)

  public constructor(id: string, name: string)

  public constructor(arg1: string, arg2?: string) {
    let id: UserId
    let name: string

    if (arg2) {
      id = new UserId(arg1)
      name = arg2
    } else {
      id = new UserId()
      name = arg1
    }
    this._id = id
    this._name = name
  }

  public get id(): UserId {
    return this._id
  }

  public get name(): string {
    return this._name
  }
}
