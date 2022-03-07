<template>
  <div>
    <PageTitle :title="page.title" :subtitle="page.subtitle" />
    <div class="content" v-html="page.content"></div>
  </div>
</template>

<script>
import { pageMixinWithData } from '~/mixins/page.mixin'

export default {
  mixins: [pageMixinWithData('contact')],
}
</script>

<style scoped>
.subtitle {
  width: calc(100% / 8 * 5);
}
</style>
