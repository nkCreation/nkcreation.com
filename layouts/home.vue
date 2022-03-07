<template>
  <div class="home">
    <svg-symbols></svg-symbols>
    <div class="home__header">
      <Header key="homeheader" class="homeheader" :dark="headerDark" />
    </div>

    <div class="home__page">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data: () => ({
    headerDark: true,
  }),
  watch: {
    $route() {
      this.doSomething(window.scrollY)
    },
  },
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

    this.doSomething(window.scrollY)
  },
  methods: {
    doSomething(scrollPos: number) {
      const headerElement = document.querySelector('.homeheader')
      const height = headerElement?.clientHeight || 0

      this.headerDark = !(scrollPos > window.innerHeight - height)
      this.headerDark
        ? headerElement?.classList.add('is-dark')
        : headerElement?.classList.remove('is-dark')

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
