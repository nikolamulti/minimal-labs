<script lang="ts">
  import { Button } from 'bits-ui';
  import { Spinner } from '$lib/components/spinner';
  import { type ComponentType } from 'svelte';

  type $$Props = Button.Props & {
    variant?: 'default' | 'primary' | 'critical' | 'outline' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
    size?: 'sm' | 'md';
    icon?: ComponentType | null;
  };

  type $$Events = Button.Events;

  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'md';
  export let icon: $$Props['icon'] = null;
  export let disabled: $$Props['disabled'] = false;
  export let loading: $$Props['loading'] = false;

  const sizes = {
    sm: 'wfs-button-icon--small',
    md: 'wfs-button-icon--medium',
  };

  const variants = {
    default: 'wfs-button-icon--default',
    primary: 'wfs-button-icon--primary',
    critical: 'wfs-button-icon--critical',
    outline: 'wfs-button-icon--outline',
    ghost: 'wfs-button-icon--ghost',
  };

  $: spinnerSize = size === 'sm' ? 12 : 16;

  const { class: className, ...rest } = $$restProps;
</script>

<Button.Root
  class={`${className || ''} wfs-button-icon ${variants[variant ?? 'default']} ${sizes[size ?? 'md']} ${loading ? 'wfs-button-icon--loading' : ''}`}
  {disabled}
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
  {#if loading}
    <Spinner size={spinnerSize} />
  {:else if icon}
    <svelte:component this={icon} class="wfs-button-icon__icon" aria-hidden="true" />
  {/if}
</Button.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-button-icon) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wfs-fg-base);
    border-radius: var(--wfs-radius-sm);
    background-color: var(--wfs-bg-action);
    cursor: pointer;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-button-icon--default) {
    background: var(--wfs-bg-action);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button-icon--primary) {
    background-color: var(--wfs-bg-primary);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button-icon--critical) {
    background-color: var(--wfs-bg-critical);
    box-shadow: var(--wfs-shadow-action);
  }

  :global(.wfs-button-icon--outline) {
    box-shadow: 0px 0px 0px 1px var(--wfs-border-muted);
  }

  :global(.wfs-button-icon--ghost) {
    background: transparent;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-button-icon:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :global(.wfs-button-icon:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-button-icon--loading) {
    cursor: wait;
  }

  :global(.wfs-button-icon--default:hover):not(:disabled):not(.wfs-button-icon--loading) {
    background: var(--wfs-bg-action-hover);
  }

  :global(.wfs-button-icon--primary:hover):not(:disabled):not(.wfs-button-icon--loading) {
    background-color: var(--wfs-bg-primary-hover);
  }

  :global(.wfs-button-icon--critical:hover):not(:disabled):not(.wfs-button-icon--loading) {
    background-color: var(--wfs-bg-critical-hover);
  }

  :global(.wfs-button-icon--outline:hover):not(:disabled):not(.wfs-button-icon--loading) {
    background-color: var(--wfs-bg-muted);
  }

  :global(.wfs-button-icon--ghost:hover):not(:disabled):not(.wfs-button-icon--loading) {
    background: var(--wfs-bg-action-hover);
  }

  /*-------------------------------------------
  / Size styles
  -------------------------------------------*/

  :global(.wfs-button-icon--small) {
    width: 1rem;
    height: 1rem;
    border-radius: var(--wfs-radius-xs);
  }

  :global(.wfs-button-icon--medium) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--wfs-radius-sm);
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-button-icon__icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
