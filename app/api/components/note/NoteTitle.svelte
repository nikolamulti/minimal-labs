<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = HTMLAttributes<HTMLHeadingElement>;

  const variant: Writable<string> = getContext('noteVariant') || writable('default');
  const style: Writable<string> = getContext('noteStyle') || writable('default');

  const { class: className, ...rest } = $$restProps;
</script>

<h3
  class={[
    className || '',
    'wfs-note__title',
    $variant === 'primary' && $style === 'solid' && 'wfs-note__title--primary-solid',
    $variant === 'primary' && $style === 'faded' && 'wfs-note__title--primary-faded',
    $variant === 'primary' && $style === 'outline' && 'wfs-note__title--primary-outline',
    $variant === 'success' && $style === 'solid' && 'wfs-note__title--success-solid',
    $variant === 'success' && $style === 'faded' && 'wfs-note__title--success-faded',
    $variant === 'success' && $style === 'outline' && 'wfs-note__title--success-outline',
    $variant === 'warning' && $style === 'solid' && 'wfs-note__title--warning-solid',
    $variant === 'warning' && $style === 'faded' && 'wfs-note__title--warning-faded',
    $variant === 'warning' && $style === 'outline' && 'wfs-note__title--warning-outline',
    $variant === 'critical' && $style === 'solid' && 'wfs-note__title--critical-solid',
    $variant === 'critical' && $style === 'faded' && 'wfs-note__title--critical-faded',
    $variant === 'critical' && $style === 'outline' && 'wfs-note__title--critical-outline',
  ]
    .filter(Boolean)
    .join(' ')}
  {...rest}
>
  <slot />
</h3>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-note__title) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-semibold);
    margin: var(--wfs-spacing-0x);
  }

  :global(.wfs-note.wfs-note--horizontal .wfs-note__title) {
    display: inline;
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-note__title--primary-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--primary-faded) {
    color: var(--wfs-fg-primary);
  }

  :global(.wfs-note__title--primary-outline) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--success-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--success-faded) {
    color: var(--wfs-fg-success);
  }

  :global(.wfs-note__title--success-outline) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--warning-solid) {
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-note__title--warning-faded) {
    color: var(--wfs-fg-warning);
  }

  :global(.wfs-note__title--warning-outline) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--critical-solid) {
    color: var(--wfs-fg-base);
  }

  :global(.wfs-note__title--critical-faded) {
    color: var(--wfs-fg-critical);
  }

  :global(.wfs-note__title--critical-outline) {
    color: var(--wfs-fg-base);
  }
</style>
