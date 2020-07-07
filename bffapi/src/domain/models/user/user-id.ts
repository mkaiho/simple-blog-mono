import uuidModule from '../../../modules/uuid/uuid'

export default class UserId {
  private readonly _value: string

  public constructor(value?: string) {
    if (value === undefined) {
      this._value = uuidModule.generate()
    } else if (!uuidModule.isValid(value)) {
      throw new Error()
    } else {
      this._value = value
    }
  }

  public get value(): string {
    return this._value
  }
}
