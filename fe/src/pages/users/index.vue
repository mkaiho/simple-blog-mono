<template>
  <simple-button :on-click="getUsers">Hello World</simple-button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import SimpleButton from '~/components/atoms/buttons/SimpleButton.vue'
import UserModule from '~/store/modules/UserModule'

@Component({
  components: { SimpleButton },
})
export default class UsersIndex extends Vue {
  public async getUsers() {
    const userModuleInstance = getModule(UserModule, this.$store)
    const users = await userModuleInstance.getUsers()
    console.info(JSON.stringify(users))
  }
}
</script>
