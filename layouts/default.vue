<template>
  <div class="default">
    <Header class="default__header" />

    <Page class="default__page">
      <Nuxt />
    </Page>
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
    --wrapper-cols: 6;

    flex: 1 1 auto;
    z-index: 1;
  }
}
</style>
