<template>
  <section ref="pageElement" class="page">
    <span class="bg-grid bg-grid--light"></span>

    <span class="page__blob page__blob--1"></span>
    <template v-if="extended">
      <span class="page__blob page__blob--2"></span>
      <span class="page__blob page__blob--3"></span>
    </template>
    <span class="page__blob page__blob--4"></span>

    <main class="content">
      <div class="u-wrapper">
        <slot />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const HEIGHT_LIMIT_EXTENDED: number = 2500

@Component
export default class PageComponent extends Vue {
  public extended = false
  private observer!: ResizeObserver

  mounted() {
    this.observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.extended = entry.borderBoxSize[0].blockSize > HEIGHT_LIMIT_EXTENDED
      })
    })

    this.observer.observe(this.$refs.pageElement as Element)
  }

  beforeDestroy() {
    this.observer.unobserve(this.$refs.pageElement as Element)
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  overflow: hidden;
  display: block;
  padding: 6rem 0;

  .bg-grid {
    z-index: 2;
  }

  .content {
    position: relative;
    z-index: 3;
  }

  &__blob {
    background-size: contain;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    display: block;
    background-repeat: no-repeat;

    &--1 {
      background-image: url('~assets/img/blob1.svg');
      width: 23rem;
      height: 59rem;
      background-position: right center;
      top: 4rem;
      right: 0;
    }

    &--2 {
      background-image: url('~assets/img/blob2.svg');
      width: 31rem;
      height: 68rem;
      background-position: left center;
      top: 17%;
      left: 0;
    }

    &--3 {
      background-image: url('~assets/img/blob3.svg');
      width: 35rem;
      height: 63rem;
      background-position: right center;
      top: 47%;
      right: 0;
    }

    &--4 {
      background-image: url('~assets/img/blob4.svg');
      width: 24rem;
      height: 68rem;
      background-position: left center;
      bottom: -5rem;
      left: 0;
    }
  }
}
</style>
