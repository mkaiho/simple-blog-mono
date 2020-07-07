import UserService from '../../services/user'

export type AllUserResponse = {
  id: string
  name: string
}[]

export default class All {
  private readonly userService: UserService

  public constructor(userService: UserService) {
    this.userService = userService
  }

  public static getAllUsers(): AllUserResponse {
    const responses: AllUserResponse = []
    UserService.getAllUsers().list.forEach((user) => {
      responses.push({
        id: user.id.value,
        name: user.name,
      })
    })
    return responses
  }
}
