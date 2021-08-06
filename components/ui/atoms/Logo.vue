<template>
  <div>
    <img
      v-if="dark"
      src="~assets/img/logo_white.svg"
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

<style scoped>
img {
  display: block;
}
</style>
