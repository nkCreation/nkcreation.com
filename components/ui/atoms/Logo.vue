<template>
  <div>
    <img
      v-if="dark"
      src="~assets/img/logo_white.svg"
      class="dark"
      height="48"
      alt="nkCreation logo"
    />
    <img
      v-if="!dark"
      src="~assets/img/logo.svg"
      height="48"
      alt="nkCreation logo"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LogoComponent extends Vue {
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
}
</script>

<style lang="scss" scoped>
img {
  display: block;

  &.dark {
    filter: drop-shadow(0 0 16px rgba(black, 0.32));
  }
}
</style>
