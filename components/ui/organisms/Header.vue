<template>
  <header class="header" :class="{ 'is-dark': dark }">
    <div class="u-wrapper header__inner">
      <NuxtLink to="/" class="logo">
        <Logo :dark="false" />
        <Logo :dark="true" />
      </NuxtLink>

      <Navigation :dark="dark" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="scss">
.header {
  --header-timing: 0.2s;
  --is-dark: 0;
  --opacity: calc(1 - var(--is-dark));

  padding: 2.4rem 0;
  position: relative;
  z-index: 2;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.is-dark {
    --is-dark: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300%;
    z-index: -1;
    display: block;
    opacity: calc(1 - var(--opacity));
    background: linear-gradient(
      to bottom,
      rgba(black, 0.32) 0%,
      rgba(black, 0) 100%
    );
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
    background: rgba(white, 0.96);
    backdrop-filter: blur(10px) saturate(120%);
    opacity: var(--opacity);
    transition: opacity 0.4s linear;
    box-shadow: 0 0.4rem 2.4rem rgba(#{var(--nk-color1-rgb)}, 0.08);
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
</style>
