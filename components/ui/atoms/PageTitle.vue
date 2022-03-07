<template>
  <div>
    <h1 :class="{ 'has-subtitle': hasSubtitle }">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p v-if="hasSubtitle" class="subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasSubtitle() {
      return this.subtitle || this.$slots?.subtitle?.length > 0
    },
  },
}
</script>

<style scoped>
.subtitle {
  width: calc(var(--background-gutter-size) * 5);
}
</style>
