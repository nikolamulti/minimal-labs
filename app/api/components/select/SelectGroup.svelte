<script lang="ts">
  import { Select } from 'bits-ui';

  type $$Props = Select.GroupProps;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Group class={`${className || ''} wfs-select__group`} {...rest}>
  <slot />
</Select.Group>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__content > .wfs-select__group:not(:first-of-type):not(.wfs-select__group:nth-last-of-type(-n + 2))) {
    padding: var(--wfs-spacing-1x) 0;
  }

  :global(.wfs-select__group:first-of-type) {
    padding-bottom: var(--wfs-spacing-1x);
  }

  :global(.wfs-select__content > .wfs-select__group:last-of-type) {
    padding-top: var(--wfs-spacing-1x);
  }

  :global(.wfs-select__content:has([data-menu-sub-content]) .wfs-select__group:nth-last-of-type(-n + 2)) {
    padding-top: var(--wfs-spacing-1x);
  }
</style>
