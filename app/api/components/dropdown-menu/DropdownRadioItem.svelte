<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { type ComponentType } from 'svelte';
  import { CheckDefault } from '$lib/components/icons';

  type $$Props = DropdownMenu.RadioItemProps & {
    icon?: ComponentType | null;
  };

  type $$Events = DropdownMenu.RadioItemEvents;

  export let icon: ComponentType | null = null;
  export let value: $$Props['value'] = '';

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.RadioItem
  class={`${className || ''} wfs-dropdown__radio-item`}
  {value}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerdown
  on:pointerleave
  on:pointermove
  on:pointerenter
  {...rest}
>
  <DropdownMenu.RadioIndicator class="wfs-dropdown__radio-indicator">
    <CheckDefault class="wfs-dropdown__radio-indicator-icon" aria-hidden="true" />
  </DropdownMenu.RadioIndicator>

  {#if icon}
    <svelte:component this={icon} class="wfs-dropdown__radio-leading-icon" aria-hidden="true" />
  {/if}

  <span class="wfs-dropdown__radio-item-content">
    <slot />
  </span>
</DropdownMenu.RadioItem>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__radio-item) {
    display: flex;
    align-items: start;
    user-select: none;
    cursor: pointer;
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    gap: var(--wfs-spacing-1x);
  }

  :global(.wfs-dropdown__radio-item-content) {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 0 var(--wfs-spacing-1x);
    white-space: nowrap;
    & > .wfs-dropdown__description {
      grid-column: 1 / -1;
      grid-row: 2;
      white-space: normal;
    }
  }

  :global(.wfs-dropdown__radio-leading-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global([data-highlighted]:not([data-disabled])) {
    background-color: var(--wfs-bg-default);
  }

  :global(.wfs-dropdown__radio-item:focus-visible):not([data-disabled]) {
    outline: none;
  }

  :global(.wfs-dropdown__radio-item[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  /*-------------------------------------------
  / Indicator styles
  -------------------------------------------*/

  :global(.wfs-dropdown__radio-indicator),
  :global(.wfs-dropdown__radio-indicator-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
