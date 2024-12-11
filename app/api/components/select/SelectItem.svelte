<script lang="ts">
  import { Select } from 'bits-ui';
  import { type ComponentType } from 'svelte';
  import { CheckDefault } from '$lib/components/icons';

  type $$Props = Select.ItemProps & {
    icon?: ComponentType | null;
  };

  type $$Events = Select.ItemEvents;

  export let icon: $$Props['icon'] = null;
  export let value: $$Props['value'] = undefined;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Item class={`${className || ''} wfs-select__item`} {value} on:click on:pointermove on:focusin on:keydown on:focusout on:pointerleave {...rest}>
  <Select.ItemIndicator class="wfs-select__item-indicator">
    <CheckDefault class="wfs-select__item-indicator-icon" aria-hidden="true" />
  </Select.ItemIndicator>

  {#if icon}
    <svelte:component this={icon} class="wfs-select__item-icon" aria-hidden="true" />
  {/if}
  <div class="wfs-select__item-content">
    <slot />
  </div>
</Select.Item>

<style>
  /*-------------------------------------------
	/ Base styles
	-------------------------------------------*/

  :global(.wfs-select__item) {
    display: flex;
    align-items: start;
    cursor: pointer;
    user-select: none;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-select__item-content) {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 0 var(--wfs-spacing-1x);
    white-space: nowrap;
    & > .wfs-select__description {
      grid-column: 1 / -1;
      grid-row: 2;
      white-space: normal;
    }
  }

  /*-------------------------------------------
	/ State styles
	-------------------------------------------*/

  :global(.wfs-select__item:focus) {
    box-shadow: inset 0 0 0 1px var(--wfs-border-primary);
    outline: none;
  }

  :global(.wfs-select__item[data-disabled]) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :global([data-highlighted]:not([data-disabled])) {
    background-color: var(--wfs-bg-default);
  }

  /*-------------------------------------------
	/ Indicator styles
	-------------------------------------------*/

  :global(.wfs-select__item-indicator),
  :global(.wfs-select__item-icon),
  :global(.wfs-select__item-indicator-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
