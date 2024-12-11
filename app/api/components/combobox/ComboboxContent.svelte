<script lang="ts">
  import { Combobox } from 'bits-ui';

  type $$Props = Combobox.ContentProps;
  type $$Events = Combobox.ContentEvents;

  export let sideOffset: $$Props['sideOffset'] = 4;

  const { class: className, ...rest } = $$restProps;
</script>

<Combobox.Content class={`${className || ''} wfs-combobox__content`} {sideOffset} on:pointerleave on:keydown {...rest}>
  <slot />
</Combobox.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-combobox__content) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--wfs-bg-muted);
    box-shadow: var(--wfs-shadow-menu);
    border-radius: var(--wfs-radius-sm);
    padding: var(--wfs-spacing-1x) 0;
  }
</style>
