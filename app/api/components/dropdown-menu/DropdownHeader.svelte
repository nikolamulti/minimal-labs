<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.LabelProps;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Label class={`${className || ''} wfs-dropdown__header`} {...rest}>
  <slot />
</DropdownMenu.Label>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__header) {
    display: flex;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-muted);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
  }
</style>
