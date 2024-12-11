<script lang="ts">
  import { Select } from 'bits-ui';

  type $$Props = Select.SeparatorProps;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Separator class={`${className || ''} wfs-select__separator`} {...rest} />

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__separator) {
    height: 1px;
    width: 100%;
    background-color: var(--wfs-border-muted);
  }
</style>
