/* eslint-disable dot-notation */
import User from '../../../../../src/domain/models/user/user'
import UserId from '../../../../../src/domain/models/user/user-id'

jest.mock('../../../../../src/domain/models/user/user-id')
const mockedUserId = UserId as jest.Mock<UserId>

beforeEach(() => {
  mockedUserId.mockClear()
})

describe('constructor', () => {
  it('create User when passed id', () => {
    const passedUserName = 'user'
    const user = new User(passedUserName)

    expect(user).toBeDefined()
    expect(user).not.toBeNull()
    expect(mockedUserId).toHaveBeenCalled()
    expect(mockedUserId.mock.calls[0][0]).toBeUndefined()
    expect(user['_name']).toBe(passedUserName)
  })

  it('create User when passed id and name', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'
    const passedUserName = 'user'
    const user = new User('bba0d9dd-167d-2ec8-d3c9-2d309bff60a1', 'user')

    expect(user).toBeDefined()
    expect(user).not.toBeNull()
    expect(mockedUserId).toHaveBeenCalled()
    expect(mockedUserId.mock.calls[0][0]).toBe(passedUserId)
    expect(user['_name']).toBe(passedUserName)
  })

  it('create User when passed id and name', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'
    const passedUserName = 'user'
    const user = new User(passedUserId, passedUserName)

    expect(user).toBeDefined()
    expect(user).not.toBeNull()
    expect(mockedUserId).toHaveBeenCalled()
    expect(mockedUserId.mock.calls[0][0]).toBe(passedUserId)
    expect(user['_name']).toBe(passedUserName)
  })
})

describe('get', () => {
  it('get id of user', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'
    const passedUserName = 'user'
    const user = new User(passedUserId, passedUserName)

    expect(user.id).toBeDefined()
    expect(user.id).not.toBeNull()
    expect(user.id).toBe(user['_id'])
  })

  it('get name of user', () => {
    const passedUserId = 'bba0d9dd-167d-2ec8-d3c9-2d309bff60a1'
    const passedUserName = 'user'
    const user = new User(passedUserId, passedUserName)

    expect(user.name).toBeDefined()
    expect(user.name).not.toBeNull()
    expect(user.name).toBe(user['_name'])
  })
})
