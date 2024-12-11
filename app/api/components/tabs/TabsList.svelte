<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = Tabs.ListProps;

  const variant: Writable<string> = getContext('tabsVariant') || writable('pills');

  const { class: className, ...rest } = $$restProps;
</script>

<Tabs.List class={`${className || ''} wfs-tabs__list wfs-tabs__list--${$variant}`} {...rest}>
  <slot />
</Tabs.List>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-tabs__list) {
    display: inline-flex;
    align-self: flex-start;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-tabs__list--pills) {
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-0-5x);
    border-radius: var(--wfs-radius-md);
    background: var(--wfs-bg-action);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-tabs__list--underline) {
    gap: var(--wfs-spacing-4x);
    padding: 0 var(--wfs-spacing-2x);
    box-shadow: inset 0 -1px 0 0 var(--wfs-border-muted);
  }
</style>
