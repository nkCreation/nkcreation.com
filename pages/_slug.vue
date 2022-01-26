<template>
  <div class="u-wrapper">
    <div class="content" v-html="page.content"></div>
  </div>
</template>

<script>
import { pageMixinWithData } from '~/mixins/page.mixin'

export default {
  mixins: [pageMixinWithData()],
}
</script>
