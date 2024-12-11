<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.DropdownTriggerProps;
  type $$Events = DropdownMenu.DropdownTriggerEvents;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Trigger class={`${className || ''} wfs-dropdown__trigger`} on:click on:keydown let:builder {...rest}>
  <slot {builder} />
</DropdownMenu.Trigger>

<style>
  /*-------------------------------------------
	/ Base styles
	-------------------------------------------*/

  :global(.wfs-dropdown__trigger) {
    cursor: pointer;
  }

  /*-------------------------------------------
	/ State styles
	-------------------------------------------*/

  :global(.wfs-dropdown__trigger:focus-visible) {
    outline: none;
  }
</style>
