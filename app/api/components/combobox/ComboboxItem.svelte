<script lang="ts">
  import { Combobox } from 'bits-ui';
  import { type ComponentType } from 'svelte';
  import { CheckDefault } from '$lib/components/icons';

  type $$Props = Combobox.ItemProps & {
    icon?: ComponentType | null;
  };

  type $$Events = Combobox.ItemEvents;

  export let icon: $$Props['icon'] = null;
  export let value: $$Props['value'] = undefined;

  const { class: className, ...rest } = $$restProps;
</script>

<Combobox.Item class={`${className || ''} wfs-combobox__item`} on:click on:pointermove on:focusin on:keydown on:focusout on:pointerleave bind:value {...rest}>
  <Combobox.ItemIndicator class="wfs-combobox__item-indicator">
    <CheckDefault class="wfs-combobox__item-indicator--checked" aria-hidden="true" />
  </Combobox.ItemIndicator>
  {#if icon}
    <svelte:component this={icon} class="wfs-combobox__item-icon" aria-hidden="true" />
  {/if}
  <div class="wfs-combobox__item-content">
    <slot />
  </div>
</Combobox.Item>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-combobox__item) {
    display: flex;
    align-items: start;
    cursor: pointer;
    gap: var(--wfs-spacing-1x);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    color: var(--wfs-fg-base);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
  }

  :global(.wfs-combobox__item-content) {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 0 var(--wfs-spacing-1x);
    white-space: nowrap;
    & > .wfs-combobox__sublabel {
      grid-column: 2;
      grid-row: 1;
    }
    & > .wfs-combobox__description {
      grid-column: 1 / -1;
      white-space: normal;
    }
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-combobox__item[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :global(.wfs-combobox__item:focus) {
    box-shadow: inset 0 0 0 1px var(--wfs-border-primary);
    outline: none;
  }

  :global([data-highlighted]:not([data-disabled])) {
    background-color: var(--wfs-bg-default);
  }

  /*-------------------------------------------
  / Indicator styles
  -------------------------------------------*/

  :global(.wfs-combobox__item-indicator) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-combobox__item-indicator--checked) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-combobox__item-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
