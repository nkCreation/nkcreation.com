<template>
  <div>
    <Hero
      :link="link"
      :label="button_label"
      :title="title"
      :message="message"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  async asyncData({ env, $axios }) {
    const { data } = await $axios.$get(`${env.apiUrl}items/hero`)

    return {
      ...data,
      title: data.title.replace(/\n/g, '<br />'),
    }
  },
})
</script>
