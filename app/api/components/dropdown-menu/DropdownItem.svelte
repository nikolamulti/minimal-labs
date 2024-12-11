<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { type ComponentType } from 'svelte';

  type $$Props = DropdownMenu.ItemProps & {
    icon?: ComponentType | null;
  };

  type $$Events = DropdownMenu.ItemEvents;

  export let icon: $$Props['icon'] = null;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.Item
  class={`${className || ''} wfs-dropdown__item`}
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
  {#if icon}
    <svelte:component this={icon} class="wfs-dropdown__item-leading-icon" aria-hidden="true" />
  {/if}
  <div class="wfs-dropdown__item-content">
    <slot />
  </div>
</DropdownMenu.Item>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__item) {
    display: flex;
    align-items: start;
    cursor: pointer;
    user-select: none;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
  }

  :global(.wfs-dropdown__item-content) {
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

  :global(.wfs-dropdown__item-leading-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global([data-highlighted]:not([data-disabled])) {
    background: var(--wfs-bg-default);
  }

  :global(.wfs-dropdown__item[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :global(.wfs-dropdown__item:focus-visible) {
    outline: none;
  }
</style>
