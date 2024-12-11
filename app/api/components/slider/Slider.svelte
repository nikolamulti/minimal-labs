<script lang="ts">
  import { Slider } from 'bits-ui';

  type $$Props = Slider.Props;

  export let value: $$Props['value'] = [];

  const { class: className, ...rest } = $$restProps;
</script>

<Slider.Root class={`${className || ''} wfs-slider`} let:thumbs bind:value {...rest}>
  <Slider.Range class="wfs-slider__range" />
  {#each thumbs as thumb}
    <Slider.Thumb class="wfs-slider__thumb" on:keydown {thumb} />
  {/each}
</Slider.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-slider) {
    display: flex;
    position: relative;
    height: var(--wfs-spacing-2x);
    background-color: var(--wfs-bg-muted);
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Range base styles
  -------------------------------------------*/

  :global(.wfs-slider__range) {
    position: absolute;
    height: 100%;
    background-color: var(--wfs-bg-primary);
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Range state styles
  -------------------------------------------*/
  :global(.wfs-slider[data-disabled] > .wfs-slider__range) {
    background-color: var(--wfs-bg-default);
  }

  /*-------------------------------------------
  / Thumb base styles
  -------------------------------------------*/

  :global(.wfs-slider__thumb) {
    display: block;
    width: 1rem;
    height: 1rem;
    transform: translateY(-25%);
    cursor: pointer;
    position: relative;
    background-color: var(--wfs-persistent-white);
    box-shadow: var(--wfs-shadow-xs);
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Thumb state styles
  -------------------------------------------*/

  :global(.wfs-slider[data-disabled] > .wfs-slider__thumb) {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(--wfs-bg-default);
  }

  :global(.wfs-slider__thumb:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }
</style>
