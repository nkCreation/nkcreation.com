<template>
  <component :is="tag" :href="href" :type="type" :class="classesNames"
    ><slot
  /></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonComponent extends Vue {
  @Prop({ type: String, default: 'primary' }) readonly color!: string
  @Prop({ type: String, default: 'button' }) readonly type!: string
  @Prop({ type: String, default: null }) readonly href!: string

  get tag() {
    return this.href ? 'a' : 'button'
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
  font-weight: 700;
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
