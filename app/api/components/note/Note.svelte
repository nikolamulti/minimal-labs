<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { createEventDispatcher, setContext, type ComponentType } from 'svelte';
  import { writable } from 'svelte/store';
  import { CloseDefault } from '$lib/components/icons';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: 'primary' | 'success' | 'warning' | 'critical';
    style?: 'solid' | 'faded' | 'outline';
    orientation?: 'vertical' | 'horizontal';
    closable?: boolean | undefined;
    fullWidth?: boolean | undefined;
    icon?: ComponentType | null;
  };

  export let variant: $$Props['variant'] = 'primary';
  export let style: $$Props['style'] = 'outline';
  export let orientation: $$Props['orientation'] = 'vertical';
  export let closable: $$Props['closable'] = true;
  export let fullWidth: $$Props['fullWidth'] = false;
  export let icon: $$Props['icon'] = null;

  const variantStore = writable(variant);
  const styleStore = writable(style);
  const orientationStore = writable(orientation);

  setContext('noteVariant', variantStore);
  setContext('noteStyle', styleStore);
  setContext('noteOrientation', orientationStore);

  const dispatch = createEventDispatcher();

  function handleClose(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const noteElement = target.closest('.wfs-note');
    if (noteElement) {
      noteElement.remove();
    }
    dispatch('close');
  }

  const { class: className, ...rest } = $$restProps;

  $: iconColorClass =
    (variant === 'primary' && style === 'solid') || (variant === 'success' && style === 'solid') || (variant === 'critical' && style === 'solid')
      ? 'wfs-note__icon--base'
      : variant === 'warning' && style === 'solid'
        ? 'wfs-note__icon--inverted'
        : `wfs-note__icon--${variant}`;
</script>

<div
  class={`${className || ''} wfs-note`}
  class:wfs-note--primary-solid={variant === 'primary' && style === 'solid'}
  class:wfs-note--primary-faded={variant === 'primary' && style === 'faded'}
  class:wfs-note--primary-outline={variant === 'primary' && style === 'outline'}
  class:wfs-note--success-solid={variant === 'success' && style === 'solid'}
  class:wfs-note--success-faded={variant === 'success' && style === 'faded'}
  class:wfs-note--success-outline={variant === 'success' && style === 'outline'}
  class:wfs-note--warning-solid={variant === 'warning' && style === 'solid'}
  class:wfs-note--warning-faded={variant === 'warning' && style === 'faded'}
  class:wfs-note--warning-outline={variant === 'warning' && style === 'outline'}
  class:wfs-note--critical-solid={variant === 'critical' && style === 'solid'}
  class:wfs-note--critical-faded={variant === 'critical' && style === 'faded'}
  class:wfs-note--critical-outline={variant === 'critical' && style === 'outline'}
  class:wfs-note--vertical={orientation === 'vertical'}
  class:wfs-note--horizontal={orientation === 'horizontal'}
  class:wfs-note--full-width={fullWidth}
  {...rest}
>
  {#if icon}
    <span class={`wfs-note__icon ${iconColorClass}`}>
      <svelte:component this={icon} aria-hidden="true" />
    </span>
  {/if}
  <slot />
  {#if closable}
    <button class="wfs-note__close-button" class:wfs-note--horizontal={orientation === 'horizontal'} on:click={handleClose}>
      <CloseDefault class="wfs-note__close-button-icon" aria-hidden="true" />
    </button>
  {/if}
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-note) {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    padding: var(--wfs-spacing-2x) var(--wfs-spacing-8x) var(--wfs-spacing-2x) var(--wfs-spacing-2x);
    border-radius: var(--wfs-radius-sm);
    box-shadow: var(--wfs-shadow-action);
    gap: 0 var(--wfs-spacing-2x);
  }

  :global(.wfs-note--horizontal) {
    padding: var(--wfs-spacing-2x);
    align-items: start;
  }

  :global(.wfs-note--full-width) {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-note--primary-solid) {
    background-color: var(--wfs-bg-primary);
  }

  :global(.wfs-note--primary-faded) {
    background-color: var(--wfs-bg-primary-transparent);
  }

  :global(.wfs-note--primary-outline) {
    background-color: var(--wfs-bg-default);
  }

  :global(.wfs-note--success-solid) {
    background-color: var(--wfs-bg-success);
  }

  :global(.wfs-note--success-faded) {
    background-color: var(--wfs-bg-success-transparent);
  }

  :global(.wfs-note--success-outline) {
    background-color: var(--wfs-bg-default);
  }

  :global(.wfs-note--warning-solid) {
    background-color: var(--wfs-bg-warning);
  }

  :global(.wfs-note--warning-faded) {
    background-color: var(--wfs-bg-warning-transparent);
  }

  :global(.wfs-note--warning-outline) {
    background-color: var(--wfs-bg-default);
  }

  :global(.wfs-note--critical-solid) {
    background-color: var(--wfs-bg-critical);
  }

  :global(.wfs-note--critical-faded) {
    background-color: var(--wfs-bg-critical-transparent);
  }

  :global(.wfs-note--critical-outline) {
    background-color: var(--wfs-bg-default);
  }

  /*-------------------------------------------
  / Close button styles
  -------------------------------------------*/

  :global(.wfs-note__close-button) {
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wfs-spacing-0x);
    top: var(--wfs-spacing-2x);
    right: var(--wfs-spacing-2x);
  }

  :global(.wfs-note__close-button-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-note--horizontal) {
    position: relative;
    top: auto;
    right: auto;
    grid-column: 4;
  }

  :global(.wfs-note__close-button:focus-visible) {
    outline: solid 1px var(--wfs-border-primary);
    offset: 1px;
    border-radius: var(--wfs-radius-xs);
  }

  :global(.wfs-note--primary-solid .wfs-note__close-button) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note--primary-faded .wfs-note__close-button) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note--primary-outline .wfs-note__close-button) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-note--success-solid .wfs-note__close-button) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note--success-faded .wfs-note__close-button) {
    color: var(--wfs-fg-success);
  }

  :global(.wfs-note--success-outline .wfs-note__close-button) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-note--warning-solid .wfs-note__close-button) {
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-note--warning-faded .wfs-note__close-button) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-note--warning-outline .wfs-note__close-button) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-note--critical-solid .wfs-note__close-button) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note--critical-faded .wfs-note__close-button) {
    color: var(--wfs-fg-critical);
  }

  :global(.wfs-note--critical-outline .wfs-note__close-button) {
    color: var(--wfs-fg-subtle);
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-note__icon) {
    display: flex;
    flex-shrink: 0;
    align-items: flex-start;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-note__icon--primary) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__icon--base) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__icon--inverted) {
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-note__icon--success) {
    color: var(--wfs-fg-success);
  }

  :global(.wfs-note__icon--warning) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-note__icon--critical) {
    color: var(--wfs-fg-critical);
  }
</style>
