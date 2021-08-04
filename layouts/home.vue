<template>
  <div>
    <div class="header" :class="{ 'is-overlap': headerDark }">
      <Header ref="headerElement" :dark="headerDark" />
    </div>

    <div class="content">
      <span class="bg-grid bg-grid--light"></span>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '~/components/Header.vue'
export default Vue.extend({
  data: () => ({
    headerDark: true,
  }),
  mounted() {
    let ticking = false

    if (!(window as any).scrollListenerRegistered) {
      window.addEventListener('scroll', () => {
        ;(window as any).scrollListenerRegistered = true

        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.doSomething(window.scrollY)
            ticking = false
          })
        }

        ticking = true
      })
    }

    this.doSomething(0)
  },
  methods: {
    doSomething(scrollPos: number) {
      const element = (this.$refs.headerElement as HeaderComponent)
        ?.$el as HTMLElement
      const height = element?.clientHeight
      const translate = element
        ? parseInt(
            getComputedStyle(element).getPropertyValue('--header-translate')
          )
        : 0

      this.headerDark = !(
        scrollPos >
        window.innerHeight - (height + translate / 2)
      )
      document.documentElement.style.setProperty(
        '--scroll-position',
        '' + scrollPos
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  ::v-deep header {
    --header-translate: 64;

    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
    transition: transform var(--header-timing, 0.2s) ease-in-out;
  }

  &.is-overlap ::v-deep header {
    transform: translateY(calc(var(--header-translate, 64) * 1px));
  }
}

.content {
  position: relative;
  z-index: 1;
}
</style>
