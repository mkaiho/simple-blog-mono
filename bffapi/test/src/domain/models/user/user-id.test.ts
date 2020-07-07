/* eslint-disable dot-notation */
import UserId from '../../../../../src/domain/models/user/user-id'
import uuidModule from '../../../../../src/modules/uuid/uuid'

describe('constructor', () => {
  it('create UserId when passed `value` is valid uuid string', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'

    const actual = new UserId(passedUserId)
    const actualUserID = actual['_value']

    expect(actual).toBeDefined()
    expect(actual).not.toBeNull()
    expect(actualUserID).toBe(passedUserId)
  })

  it('throw exception when passed `value` is invalid uuid string', () => {
    const invalidUserId = 'bba0d9dd167d2ec8d3c92d309bff60a1'
    expect(() => new UserId(invalidUserId)).toThrow()
  })

  it('create UserId when passed `value` is undefined', () => {
    const actual = new UserId()
    const actualUserID = actual['_value']

    expect(actual).toBeDefined()
    expect(actual).not.toBeNull()
    expect(uuidModule.isValid(actualUserID)).toBeTruthy()
  })
})

describe('get', () => {
  it('get value of user id', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'

    const actual = new UserId(passedUserId)
    const actualUserID = actual['_value']

    expect(actualUserID).toBeDefined()
    expect(actualUserID).not.toBeNull()
    expect(actual.value).toBe(actualUserID)
  })
})
