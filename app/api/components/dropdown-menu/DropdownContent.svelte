<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.ContentProps;
  type $$Events = DropdownMenu.ContentEvents;

  export let side: $$Props['side'] = 'bottom';
  export let sideOffset: $$Props['sideOffset'] = 4;
  export let align: $$Props['align'] = 'start';

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Content class={`${className || ''} wfs-dropdown__content`} {side} {sideOffset} {align} on:keydown {...rest}>
  <slot />
</DropdownMenu.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__content) {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    background: var(--wfs-bg-muted);
    border-radius: var(--wfs-radius-sm);
    box-shadow: var(--wfs-shadow-menu);
    font-size: var(--wfs-font-size-sm);
    padding: var(--wfs-spacing-1x) 0;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-dropdown__content:focus-visible) {
    outline: none;
  }
</style>
