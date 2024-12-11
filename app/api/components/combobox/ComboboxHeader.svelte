<script lang="ts">
  import { Combobox } from 'bits-ui';

  type $$Props = Combobox.LabelProps;

  const { class: className, ...rest } = $$restProps;
</script>

<Combobox.Label class={`${className || ''} wfs-combobox__header`} {...rest}>
  <slot />
</Combobox.Label>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-combobox__header) {
    display: flex;
    align-items: center;
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    color: var(--wfs-fg-muted);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
  }

  :global(.wfs-combobox__content:not(:has(.wfs-combobox__item))) :global(.wfs-combobox__header) {
    display: none;
  }

  :global(.wfs-combobox__content:not(:has(.wfs-combobox__item))) {
    color: var(--wfs-fg-subtle);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
  }
</style>
