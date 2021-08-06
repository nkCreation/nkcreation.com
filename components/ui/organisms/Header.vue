<template>
  <header :class="{ 'is-dark': dark }">
    <div class="u-wrapper">
      <NuxtLink to="/" class="logo">
        <Logo :dark="false" />
        <Logo :dark="true" />
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeaderComponent extends Vue {
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
}
</script>

<style scoped lang="scss">
header {
  --header-timing: 0.4s;
  --is-dark: 0;
  --opacity: calc(1 - var(--is-dark));

  padding: 2.4rem 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 0.4rem 2.4rem rgba(#{var(--nk-color1-rgb)}, 0.08);

  &.is-dark {
    --is-dark: 1;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300%;
    z-index: -1;
    display: block;
    background: white;
    opacity: var(--opacity);
    transition: opacity 0.4s linear;
  }
}

.logo {
  position: relative;

  div {
    transition: opacity var(--header-timing) linear;
  }

  div:nth-child(1) {
    opacity: var(--opacity);
  }
  div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: calc(1 - var(--opacity));
  }
}
img {
  display: block;
}
</style>
