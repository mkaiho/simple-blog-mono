import User from '../domain/models/user/user'
import Users from '../domain/models/user/users'

export default class UserService {
  public static getAllUsers(): Users {
    return new Users([new User('mkaiho')])
  }
}
