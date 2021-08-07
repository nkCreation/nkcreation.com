<template>
  <div class="home">
    <div class="home__header">
      <Header ref="headerElement" :dark="headerDark" />
    </div>

    <div class="home__page">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '~/components/ui/organisms/Header.vue'
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

      this.headerDark = !(scrollPos > window.innerHeight - height)
      document.documentElement.style.setProperty(
        '--scroll-position',
        '' + scrollPos
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  float: left;
  width: 100%;
}

.home__header {
  height: 0;
  margin-top: 64px;
  position: sticky;
  top: 0;
  z-index: 2;
}

.home__page {
  position: relative;
  z-index: 1;
  margin-top: -64px;
}
</style>
