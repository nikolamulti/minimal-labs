<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.GroupProps;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Group class={`${className || ''} wfs-dropdown__group`} {...rest}>
  <slot />
</DropdownMenu.Group>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__content > .wfs-dropdown__group:not(:first-of-type):not(.wfs-dropdown__group:nth-last-of-type(-n + 2))) {
    padding: var(--wfs-spacing-1x) 0;
  }

  :global(.wfs-dropdown__group:first-of-type) {
    padding-bottom: var(--wfs-spacing-1x);
  }

  :global(.wfs-dropdown__content > .wfs-dropdown__group:last-of-type) {
    padding-top: var(--wfs-spacing-1x);
  }

  :global(.wfs-dropdown__content:has([data-menu-sub-content]) .wfs-dropdown__group:nth-last-of-type(-n + 2)) {
    padding-top: var(--wfs-spacing-1x);
  }
</style>
