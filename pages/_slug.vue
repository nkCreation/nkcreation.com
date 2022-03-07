<template>
  <div>
    <PageTitle :title="page.title" :subtitle="page.subtitle" />
    <div class="content" v-html="page.content"></div>
  </div>
</template>

<script>
import { pageMixinWithData } from '~/mixins/page.mixin'

export default {
  mixins: [pageMixinWithData()],
}
</script>
