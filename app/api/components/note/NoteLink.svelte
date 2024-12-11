<script lang="ts">
  import { Button } from 'bits-ui';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = Button.Props & {
    href?: string | undefined;
    leadingIcon?: ComponentType | null;
    trailingIcon?: ComponentType | null;
    disabled?: boolean | undefined;
    underline?: boolean | undefined;
  };

  type $$Events = Button.Events;

  export let href: $$Props['href'] = '#';
  export let leadingIcon: $$Props['leadingIcon'] = null;
  export let trailingIcon: $$Props['trailingIcon'] = null;
  export let disabled: $$Props['disabled'] = false;
  export let underline: $$Props['underline'] = false;

  const variant: Writable<string> = getContext('noteVariant') || writable('default');
  const style: Writable<string> = getContext('noteStyle') || writable('default');
  const orientation: Writable<string> = getContext('noteOrientation') || writable('vertical');

  const { class: className, ...rest } = $$restProps;
</script>

<Button.Root
  class={[
    className || '',
    'wfs-note__link_wrapper',
    $variant === 'primary' && $style === 'solid' && 'wfs-note__link--primary-solid',
    $variant === 'primary' && $style === 'faded' && 'wfs-note__link--primary-faded',
    $variant === 'primary' && $style === 'outline' && 'wfs-note__link--primary-outline',
    $variant === 'success' && $style === 'solid' && 'wfs-note__link--success-solid',
    $variant === 'success' && $style === 'faded' && 'wfs-note__link--success-faded',
    $variant === 'success' && $style === 'outline' && 'wfs-note__link--success-outline',
    $variant === 'warning' && $style === 'solid' && 'wfs-note__link--warning-solid',
    $variant === 'warning' && $style === 'faded' && 'wfs-note__link--warning-faded',
    $variant === 'warning' && $style === 'outline' && 'wfs-note__link--warning-outline',
    $variant === 'critical' && $style === 'solid' && 'wfs-note__link--critical-solid',
    $variant === 'critical' && $style === 'faded' && 'wfs-note__link--critical-faded',
    $variant === 'critical' && $style === 'outline' && 'wfs-note__link--critical-outline',
    $orientation === 'horizontal' && 'wfs-note__link--horizontal',
    $orientation === 'vertical' && 'wfs-note__link--vertical',
    ($style !== 'outline' || underline) && 'wfs-note__link--underline',
  ]
    .filter(Boolean)
    .join(' ')}
  {href}
  disabled={!href || disabled}
  target={href ? '_blank' : undefined}
  rel={href ? 'noopener noreferrer' : undefined}
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
  {#if leadingIcon}
    <svelte:component this={leadingIcon} class="wfs-note__link-icon" aria-hidden="true" />
  {/if}
  <slot />
  {#if trailingIcon}
    <svelte:component this={trailingIcon} class="wfs-note__link-icon" aria-hidden="true" />
  {/if}
</Button.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-note__link_wrapper) {
    display: inline-flex;
    flex-shrink: 0;
    grid-column: 2;
  }

  :global(.wfs-note__link--horizontal) {
    grid-column: 3;
  }

  :global(.wfs-note__link) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    gap: var(--wfs-spacing-1x);
    color: inherit;
  }

  :global(:-webkit-any-link) {
    text-decoration: none;
  }

  :global(:-moz-any-link) {
    text-decoration: none;
  }

  :global(:any-link) {
    text-decoration: none;
  }

  :global(.wfs-note__link--underline) {
    text-decoration: underline;
  }

  :global(.wfs-note__link:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
    border-radius: var(--wfs-radius-xs);
  }

  :global(.wfs-note__link--vertical) {
    margin-top: var(--wfs-spacing-1-5x);
  }

  :global(.wfs-note__link--horizontal) {
    margin-top: var(--wfs-spacing-0x);
    margin-left: var(--wfs-spacing-1-5x);
  }

  :global(.wfs-note__link-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-note__link_button) {
    cursor: pointer;
  }

  /*-------------------------------------------
  / Link variants styles
  -------------------------------------------*/

  :global(.wfs-note__link--primary-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__link--primary-faded) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__link--primary-outline) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__link--success-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__link--success-faded) {
    color: var(--wfs-fg-success);
  }

  :global(.wfs-note__link--success-outline) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__link--warning-solid) {
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-note__link--warning-faded) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-note__link--warning-outline) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__link--critical-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__link--critical-faded) {
    color: var(--wfs-fg-critical);
  }

  :global(.wfs-note__link--critical-outline) {
    color: var(--wfs-fg-primary);
  }
</style>
