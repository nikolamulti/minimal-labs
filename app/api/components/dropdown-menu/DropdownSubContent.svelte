<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.SubContentProps;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.SubContent class={`${className || ''} wfs-dropdown__sub-content`} {...rest}>
  <slot />
</DropdownMenu.SubContent>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__sub-content) {
    display: flex;
    flex-direction: column;
    background: var(--wfs-bg-muted);
    border-radius: var(--wfs-radius-sm);
    box-shadow: var(--wfs-shadow-menu);
    padding: var(--wfs-spacing-1x) 0;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-dropdown__sub-content:focus-visible) {
    outline: none;
  }
</style>
