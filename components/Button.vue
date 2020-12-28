<template>
  <button :type="type" :class="classesNames"><slot /></button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonComponent extends Vue {
  @Prop({ type: String, default: 'primary' }) readonly color!: string
  @Prop({ type: String, default: 'button' }) readonly type!: string

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
    --nk-button-background: linear-gradient(
      to bottom right,
      #fff 0%,
      #e4fafc 100%
    );
  }
}
</style>
