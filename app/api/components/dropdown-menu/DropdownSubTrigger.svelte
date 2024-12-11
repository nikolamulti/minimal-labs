<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { type ComponentType } from 'svelte';
  import { ChevronSmallRight } from '$lib/components/icons';

  type $$Props = DropdownMenu.SubTriggerProps & {
    icon?: ComponentType | null;
  };

  export let icon: $$Props['icon'] = null;

  const { class: className, ...rest } = $$restProps;
</script>

<DropdownMenu.SubTrigger class={`${className || ''} wfs-dropdown__subtrigger`} {...rest}>
  {#if icon}
    <svelte:component this={icon} class="wfs-dropdown__subtrigger-leading-icon" aria-hidden="true" />
  {/if}
  <slot />
  <ChevronSmallRight class="wfs-dropdown__subtrigger-trailing-icon" aria-hidden="true" />
</DropdownMenu.SubTrigger>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__subtrigger) {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    color: var(--wfs-fg-base);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
  }

  :global(.wfs-dropdown__subtrigger-leading-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-dropdown__subtrigger-trailing-icon) {
    display: flex;
    flex-shrink: 0;
    margin-left: auto;
    color: var(--wfs-fg-muted);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global([data-highlighted]:not([data-disabled])) {
    background: var(--wfs-bg-default);
  }

  :global(.wfs-dropdown__subtrigger:focus-visible):not([data-disabled]) {
    outline: none;
  }

  :global(.wfs-dropdown__subtrigger[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }
</style>
