<template>
  <button
    :disabled="isDisabled"
    :class="['SimpleButton']"
    :type="buttonType"
    :on-click="onClick"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class SimpleButton extends Vue {
  @Prop({ default: false })
  public isDisabled!: boolean

  @Prop({ default: 'submit' })
  public buttonType!: boolean

  @Prop()
  public onClick?: Function

  public handleClick() {
    if (this.onClick) {
      this.onClick()
    }
  }
}
</script>

<style lang="scss">
.SimpleButton {
  @extend .base-button;
}
</style>
