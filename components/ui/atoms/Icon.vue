<template>
  <svg class="icon" :class="'icon-' + symbol">
    <use :href="`#i-${symbol}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      required: true,
    },
  },
}
</script>
