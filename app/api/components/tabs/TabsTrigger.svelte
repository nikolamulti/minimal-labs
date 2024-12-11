<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = Tabs.TriggerProps & {
    icon?: ComponentType | null;
  };

  type $$Events = Tabs.TriggerEvents;

  const variant: Writable<string> = getContext('tabsVariant') || writable('pills');

  export let icon: $$Props['icon'] = null;
  export let value: $$Props['value'] = '';

  const { class: className, ...rest } = $$restProps;
</script>

<Tabs.Trigger class={`${className || ''} wfs-tabs__trigger wfs-tabs__trigger--${$variant}`} {value} on:click on:keydown on:focus {...rest}>
  {#if icon}
    <svelte:component this={icon} class="wfs-tabs__trigger-icon" aria-hidden="true" />
  {/if}
  <slot />
</Tabs.Trigger>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-tabs__trigger) {
    display: inline-flex;
    align-items: center;
    text-wrap: nowrap;
    cursor: pointer;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-medium);
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-tabs__trigger--pills) {
    display: flex;
    background-color: transparent;
    border-radius: var(--wfs-radius-circular);
    gap: var(--wfs-spacing-1x);
    border-radius: var(--wfs-radius-sm);
    padding: var(--wfs-spacing-0-5x) var(--wfs-spacing-1x);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-tabs__trigger--underline) {
    display: flex;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-3x) 0;
    color: var(--wfs-fg-muted);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-tabs__trigger--pills:hover:not([data-disabled])) {
    background-color: var(--wfs-bg-base);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-tabs__trigger--pills[data-disabled]) {
    color: var(--wfs-fg-disabled);
    cursor: not-allowed;
  }

  :global(.wfs-tabs__trigger--pills[data-state='active']) {
    background-color: var(--wfs-bg-base);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-tabs__trigger--pills:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-tabs__trigger--underline:hover:not([data-disabled]):not([data-state='active'])) {
    box-shadow: inset 0 -1px 0 0 var(--wfs-border-default);
  }

  :global(.wfs-tabs__trigger--underline[data-disabled]) {
    color: var(--wfs-fg-disabled);
    cursor: not-allowed;
  }

  :global(.wfs-tabs__trigger--underline[data-state='active']) {
    color: var(--wfs-fg-base);
    box-shadow: inset 0 -1px 0 0 var(--wfs-border-inverted);
  }

  :global(.wfs-tabs__trigger--underline:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-tabs__trigger-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
