<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const variant: Writable<string> = getContext('noteVariant') || writable('default');
  const style: Writable<string> = getContext('noteStyle') || writable('default');

  const { class: className, ...rest } = $$restProps;
</script>

<div
  class={[
    className || '',
    'wfs-note__description',
    $variant === 'primary' && $style === 'solid' && 'wfs-note__description--primary-solid',
    $variant === 'primary' && $style === 'faded' && 'wfs-note__description--primary-faded',
    $variant === 'primary' && $style === 'outline' && 'wfs-note__description--primary-outline',
    $variant === 'success' && $style === 'solid' && 'wfs-note__description--success-solid',
    $variant === 'success' && $style === 'faded' && 'wfs-note__description--success-faded',
    $variant === 'success' && $style === 'outline' && 'wfs-note__description--success-outline',
    $variant === 'warning' && $style === 'solid' && 'wfs-note__description--warning-solid',
    $variant === 'warning' && $style === 'faded' && 'wfs-note__description--warning-faded',
    $variant === 'warning' && $style === 'outline' && 'wfs-note__description--warning-outline',
    $variant === 'critical' && $style === 'solid' && 'wfs-note__description--critical-solid',
    $variant === 'critical' && $style === 'faded' && 'wfs-note__description--critical-faded',
    $variant === 'critical' && $style === 'outline' && 'wfs-note__description--critical-outline',
  ]
    .filter(Boolean)
    .join(' ')}
  {...rest}
>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-note__description) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    width: 100%;
  }

  :global(.wfs-note.wfs-note--horizontal .wfs-note__description) {
    display: inline;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-note__description--primary-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__description--primary-faded) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__description--primary-outline) {
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-note__description--success-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__description--success-faded) {
    color: var(--wfs-fg-success);
  }

  :global(.wfs-note__description--success-outline) {
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-note__description--warning-solid) {
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-note__description--warning-faded) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-note__description--warning-outline) {
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-note__description--critical-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__description--critical-faded) {
    color: var(--wfs-fg-critical);
  }

  :global(.wfs-note__description--critical-outline) {
    color: var(--wfs-fg-muted);
  }
</style>
