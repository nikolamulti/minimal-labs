<script lang="ts">
  import { Select } from 'bits-ui';

  type $$Props = Select.LabelProps;
  type $$Events = Select.LabelEvents;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Label class={`${className || ''} wfs-select__header`} on:click {...rest}>
  <slot />
</Select.Label>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__header) {
    display: flex;
    align-items: center;
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    color: var(--wfs-fg-muted);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
  }
</style>
