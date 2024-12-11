<script lang="ts">
  import { Button } from 'bits-ui';
  import { Spinner } from '$lib/components/spinner';
  import { type ComponentType } from 'svelte';

  type $$Props = Button.Props & {
    variant?: 'default' | 'primary' | 'critical' | 'outline' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
    leadingIcon?: ComponentType | null;
    trailingIcon?: ComponentType | null;
  };

  type $$Events = Button.Events;

  export let variant: $$Props['variant'] = 'default';
  export let disabled: $$Props['disabled'] = false;
  export let loading: $$Props['loading'] = false;
  export let leadingIcon: $$Props['leadingIcon'] = null;
  export let trailingIcon: $$Props['trailingIcon'] = null;

  const variants = {
    default: 'wfs-button--default',
    primary: 'wfs-button--primary',
    critical: 'wfs-button--critical',
    outline: 'wfs-button--outline',
    ghost: 'wfs-button--ghost',
  };

  const { class: className, ...rest } = $$restProps;
</script>

<Button.Root
  class={`${className || ''} wfs-button ${variants[variant ?? 'default']} ${loading ? 'wfs-button--loading' : ''}`}
  {disabled}
  tabindex={loading ? -1 : 1}
  on:click
  on:keydown
  on:change
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mousedown
  on:mouseup
  on:pointerdown
  on:pointerup
  {...rest}
>
  <span class="wfs-button__content" class:wfs-button__content--invisible={loading}>
    {#if leadingIcon}
      <svelte:component this={leadingIcon} class="wfs-button__icon" aria-hidden="true" />
    {/if}
    <span class="wfs-button__label-wrapper">
      <slot />
    </span>
    {#if trailingIcon}
      <svelte:component this={trailingIcon} class="wfs-button__icon" aria-hidden="true" />
    {/if}
  </span>

  {#if loading}
    <span class="wfs-button__spinner">
      <Spinner size={16} />
    </span>
  {/if}
</Button.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-button) {
    position: relative;
    border-radius: var(--wfs-radius-sm);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-2x);
    display: inline-flex;
    gap: var(--wfs-spacing-0-5x);
    align-items: center;
    justify-content: center;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    color: var(--wfs-fg-base);
    cursor: pointer;
    text-decoration: none;
  }

  :global(.wfs-button__content) {
    display: flex;
    align-items: center;
    gap: var(--wfs-spacing-0-5x);
  }

  :global(.wfs-button__content--invisible) {
    visibility: hidden;
  }

  :global(.wfs-button__spinner) {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-button--default) {
    background: var(--wfs-bg-action);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button--primary) {
    background-color: var(--wfs-bg-primary);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button--critical) {
    background-color: var(--wfs-bg-critical);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button--outline) {
    box-shadow: 0px 0px 0px 1px var(--wfs-border-muted);
  }

  :global(.wfs-button--ghost) {
    background: transparent;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-button:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :global(.wfs-button:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-button--loading) {
    cursor: wait;
  }

  :global(.wfs-button--default:hover):not(:disabled):not(.wfs-button--loading) {
    background: var(--wfs-bg-action-hover);
  }

  :global(.wfs-button--primary:hover):not(:disabled):not(.wfs-button--loading) {
    background-color: var(--wfs-bg-primary-hover);
  }

  :global(.wfs-button--critical:hover):not(:disabled):not(.wfs-button--loading) {
    background-color: var(--wfs-bg-critical-hover);
  }

  :global(.wfs-button--outline:hover):not(:disabled):not(.wfs-button--loading) {
    background-color: var(--wfs-bg-muted);
  }

  :global(.wfs-button--ghost:hover):not(:disabled):not(.wfs-button--loading) {
    background: var(--wfs-bg-action-hover);
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-button:has(svg + .wfs-button__label-wrapper)) {
    padding-left: var(--wfs-spacing-1x);
  }

  :global(.wfs-button:has(.wfs-button__label-wrapper + svg)) {
    padding-right: var(--wfs-spacing-1x);
  }

  :global(.wfs-button:has(svg + .wfs-button__label-wrapper + svg)) {
    padding-left: var(--wfs-spacing-1x);
    padding-right: var(--wfs-spacing-1x);
  }

  :global(.wfs-button__icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
