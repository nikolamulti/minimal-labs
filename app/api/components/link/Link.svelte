<script lang="ts">
  import { Button } from 'bits-ui';
  import type { ComponentType } from 'svelte';

  type $$Props = Button.Props & {
    variant?: 'white' | 'success' | 'critical' | 'primary' | 'warning';
    underline?: boolean | undefined;
    leadingIcon?: ComponentType | null;
    trailingIcon?: ComponentType | null;
    disabled?: boolean | undefined;
  };

  type $$Events = Button.Events;

  export let variant: $$Props['variant'] = 'primary';
  export let href: $$Props['href'] = undefined;
  export let underline: $$Props['underline'] = false;
  export let leadingIcon: $$Props['leadingIcon'] = null;
  export let trailingIcon: $$Props['trailingIcon'] = null;
  export let disabled: $$Props['disabled'] = false;

  const { class: className, ...rest } = $$restProps;

  const variants: Record<NonNullable<$$Props['variant']>, string> = {
    white: 'wfs-link--white',
    success: 'wfs-link--success',
    warning: 'wfs-link--warning',
    critical: 'wfs-link--critical',
    primary: 'wfs-link--primary',
  };
</script>

<Button.Root
  class={[
    className || '',
    'wfs-link',
    'wfs-link-button',
    'wfs-link__wrapper',
    variants[variant || 'primary'],
    !href && disabled && 'wfs-link-button--disabled',
    underline && 'wfs-link-button--underline',
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
    <svelte:component this={leadingIcon} class="wfs-link__icon" aria-hidden="true" />
  {/if}
  <slot />
  {#if trailingIcon}
    <svelte:component this={trailingIcon} class="wfs-link__icon" aria-hidden="true" />
  {/if}
</Button.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-link) {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: inherit;
    text-decoration: none;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
  }

  :global(.wfs-link-button) {
    text-decoration: none;
    cursor: pointer;
  }

  :global(.wfs-link__wrapper) {
    display: inline-flex;
    width: fit-content;
  }

  :global(.wfs-link__label-wrapper) {
    padding-right: var(--wfs-spacing-0-5x);
    padding-left: var(--wfs-spacing-0-5x);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-link:focus) {
    outline: none;
  }

  :global(.wfs-link:focus-visible:not(.wfs-link--disabled)) {
    outline: 1px solid var(--wfs-border-primary);
    border-radius: var(--wfs-radius-xs);
    outline-offset: 1px;
  }

  :global(.wfs-link-button--disabled),
  :global(.wfs-link--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-link__wrapper.wfs-link--white) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-link__wrapper.wfs-link--primary) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-link__wrapper.wfs-link--critical) {
    color: var(--wfs-fg-critical);
  }

  :global(.wfs-link__wrapper.wfs-link--warning) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-link__wrapper.wfs-link--success) {
    color: var(--wfs-fg-success);
  }

  /*-------------------------------------------
  / Underline styles
  -------------------------------------------*/

  :global(.wfs-link-button--underline),
  :global(.wfs-link--underline) {
    text-decoration: underline;
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-link__icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
