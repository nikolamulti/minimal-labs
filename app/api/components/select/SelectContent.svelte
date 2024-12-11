<script lang="ts">
  import { Select } from 'bits-ui';

  type $$Props = Select.ContentProps;
  type $$Events = Select.ContentEvents;

  export let sideOffset: $$Props['sideOffset'] = 4;
  export let sameWidth: $$Props['sameWidth'] = true;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Content class={`${className || ''} wfs-select__content`} {sideOffset} {sameWidth} on:pointerleave on:keydown {...rest}>
  <slot />
</Select.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__content) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--wfs-bg-muted);
    box-shadow: var(--wfs-shadow-menu);
    border-radius: var(--wfs-radius-sm);
    padding: var(--wfs-spacing-1x) 0;
  }
</style>
