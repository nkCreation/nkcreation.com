<template>
  <section class="hero">
    <span class="background"></span>
    <span class="bg-grid"></span>

    <div class="u-wrapper">
      <main>
        <h1 data-disappear v-html="title"></h1>

        <div data-disappear class="content" v-html="message"></div>

        <Button
          v-if="link && label"
          data-disappear
          :href="link"
          class="button"
          color="white"
          >{{ label }}</Button
        >
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeroComponent extends Vue {
  @Prop({ type: String, default: '' }) readonly title!: string
  @Prop({ type: String, default: '' }) readonly message!: string
  @Prop({ type: String, default: '' }) readonly link!: string
  @Prop({ type: String, default: '' }) readonly label!: string
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100%;
  position: relative;
  padding-top: 8.8rem + 4.8rem;
  overflow: hidden;
}

.background {
  --parallax-speed: 0.5;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('~assets/img/background.svg');
  background-size: cover;
  background-position: center center;
}

.u-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
  z-index: 2;

  h1 {
    --fade-begin: 100;
    --fade-end: 390;
  }

  .content {
    --fade-begin: 260;
    --fade-end: 400;
  }

  .button {
    --fade-begin: 360;
    --fade-end: 500;

    font-size: clamp(1.6rem, 1.4615rem + 0.3846vw, 2rem);
  }
}

main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h1 {
  color: white;
  line-height: 1.1;
  font-weight: 300;
  font-size: clamp(4rem, 2.6154rem + 3.8462vw, 8rem);
  letter-spacing: calc(-20em / 1000);
  margin-top: 0;
}

.content ::v-deep {
  a {
    font: inherit;
    color: inherit;
  }

  p {
    font-size: clamp(1.6rem, 1.3231rem + 0.7692vw, 2.4rem);
    font-weight: normal;
    color: rgba(white, 0.88);
    margin: 2em 0;
  }
}
</style>
