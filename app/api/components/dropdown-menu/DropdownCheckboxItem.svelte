<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { type ComponentType } from 'svelte';
  import { CheckDefault } from '$lib/components/icons';

  type $$Props = DropdownMenu.CheckboxItemProps & {
    icon?: ComponentType | null;
  };

  type $$Events = DropdownMenu.CheckboxItemEvents;

  export let icon: ComponentType | null = null;
  export let checked: $$Props['checked'] = false;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.CheckboxItem
  class={`${className || ''} wfs-dropdown__checkbox-item`}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerdown
  on:pointerleave
  on:pointermove
  on:pointerenter
  bind:checked
  {...rest}
>
  <DropdownMenu.CheckboxIndicator class="wfs-dropdown__checkbox-indicator">
    <CheckDefault class="wfs-dropdown__checkbox-indicator-icon" aria-hidden="true" />
  </DropdownMenu.CheckboxIndicator>

  {#if icon}
    <svelte:component this={icon} class="wfs-dropdown__checkbox-leading-icon" aria-hidden="true" />
  {/if}

  <div class="wfs-dropdown__checkbox-item-content">
    <slot />
  </div>
</DropdownMenu.CheckboxItem>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__checkbox-item) {
    display: flex;
    align-items: start;
    cursor: pointer;
    user-select: none;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
  }

  :global(.wfs-dropdown__checkbox-item-content) {
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

  :global(.wfs-dropdown__checkbox-leading-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-dropdown__checkbox-item:focus-visible):not([data-disabled]) {
    outline: none;
  }

  :global(.wfs-dropdown__checkbox-item[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  /*-------------------------------------------
  / Indicator styles
  -------------------------------------------*/

  :global(.wfs-dropdown__checkbox-indicator) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-dropdown__checkbox-indicator-icon) {
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
