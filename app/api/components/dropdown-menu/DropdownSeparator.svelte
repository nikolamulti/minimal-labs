<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.SeparatorProps;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Separator class={`${className || ''} wfs-dropdown__separator`} {...rest} />

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__separator) {
    height: 1px;
    margin-top: -1px;
    box-shadow: inset 0 1px 0 0 var(--wfs-border-muted);
  }
</style>
