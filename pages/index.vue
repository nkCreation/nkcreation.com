<template>
  <div>
    <Hero v-bind="heroData" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  async asyncData({ env, $axios }) {
    const { data } = await $axios.$get(`${env.apiUrl}items/hero`)

    return {
      heroData: {
        ...data,
        title: data.title.replace(/\n/g, '<br />'),
        label: data.button_label,
      },
    }
  },
})
</script>
