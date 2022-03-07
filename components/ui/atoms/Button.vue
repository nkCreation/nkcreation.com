<template>
  <component :is="tag" v-bind="props"><slot /></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonComponent extends Vue {
  @Prop({ type: String, default: 'primary' }) readonly color!: string
  @Prop({ type: String, default: 'button' }) readonly type!: string
  @Prop({ type: String, default: '' }) readonly href!: string

  get isANuxtLink() {
    return !this.href.startsWith('http')
  }

  get tag() {
    return this.href ? (this.isANuxtLink ? 'nuxt-link' : 'a') : 'button'
  }

  get props() {
    return {
      type: this.type,
      class: this.classesNames,
      href: this.href || null,
      to: this.isANuxtLink ? this.href : null,
      target: this.href && !this.isANuxtLink ? '_blank' : null,
    }
  }

  get classesNames() {
    return `nk-button nk-button--${this.color}`
  }
}
</script>

<style lang="scss" scoped>
.nk-button {
  --nk-button-color: white;
  --nk-button-background: linear-gradient(
    to bottom right,
    var(--nk-color2) 0%,
    var(--nk-color1) 100%
  );
  --nk-button-active-color: var(--nk-button-color);
  --nk-button-active-background: var(--nk-button-background);
  --nk-button-shadow-color: rgba(var(--nk-color1-rgb), 0.16);
  --nk-button-shadow-property: 0 4px 32px;

  cursor: pointer;
  text-decoration: none;
  appearance: none;
  outline: none;
  border: 0;
  padding: 0 2em;
  width: auto;
  height: 2.4em;
  border-radius: 2em;
  color: var(--nk-button-color);
  font-weight: 600;
  letter-spacing: calc(-16em / 1000);
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--nk-button-background);
  box-shadow: var(--nk-button-shadow-property) var(--nk-button-shadow-color);

  &--white {
    --nk-button-shadow-color: rgba(255, 255, 255, 0.16);
    --nk-button-color: var(--nk-color1);
    --nk-button-background: #fff;
  }
}
</style>
