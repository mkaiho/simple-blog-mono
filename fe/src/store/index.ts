import Vuex from 'vuex'
import UserModule from '~/store/modules/UserModule'

export function createStore() {
  return new Vuex.Store({
    modules: {
      UserModule,
    },
  })
}
