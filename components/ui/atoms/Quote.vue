<template>
  <figure>
    <blockquote>
      <p>
        <slot />
      </p>
    </blockquote>
    <figcaption v-if="author">{{ author }}</figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    author: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
figure {
  display: block;
  margin: 8em 0 10em;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 1.6rem;
    top: 50%;
    background-image: url('~assets/img/quote.svg');
    width: 75.3rem;
    height: 71.7rem;
    background-size: contain;
    transform: translateY(-40%);
  }
}

blockquote {
  font-size: 4.8rem;
  margin: 0;
  padding: 0;
  font-family: var(--font-family-title);
  font-weight: 300;
  color: var(--nk-color1);
  letter-spacing: calc(-20em / 1000);

  &::before,
  &::after {
    position: absolute;
    font-size: 16rem;
    color: var(--nk-color2);
    font-weight: 300;
    line-height: 1;
    padding: 0 0.1em;
    opacity: 0.4;
  }
  &::before {
    content: '“';
    top: -2rem;
    right: 100%;
  }
  &::after {
    content: '”';
    left: 100%;
    top: calc(100% - 8rem);
  }

  p {
    font: inherit;
    margin: 0;
  }
}

figcaption {
  font-size: 2.4rem;
}
</style>
