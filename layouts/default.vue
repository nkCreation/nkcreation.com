<template>
  <div class="default">
    <Header class="default__header" />

    <section class="default__page">
      <span class="bg-grid bg-grid--light"></span>

      <div class="u-wrapper">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.default {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    position: sticky;
    top: 0;
    flex: 0 0 auto;
  }
  &__page {
    padding: 12rem 0;
    flex: 1 1 auto;
    display: block;
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      background-size: contain;
      background-position: center center;
    }

    &::before {
      top: 36.4rem;
      left: -21.5rem;
      width: 52.4rem;
      height: 77.7rem;
      background: url('~assets/img/bg_left_1.svg');
    }

    &::after {
      top: 5rem;
      right: -26.4rem;
      width: 49.6rem;
      height: 57.9rem;
      background: url('~assets/img/bg_right_1.svg');
    }
  }
}
</style>
