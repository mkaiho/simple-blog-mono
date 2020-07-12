import {
  Module,
  VuexModule,
  VuexAction as Action,
} from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'

@Module({
  name: 'modules/UserModule',
  namespaced: true,
  stateFactory: true,
})
export default class UserModule extends VuexModule {
  @Action
  public getUsers() {
    return $axios.$get('/bff-api/users')
  }
}
