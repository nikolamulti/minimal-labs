<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLLegendElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<legend class={`${className || ''} wfs-legend`} {...rest}>
  <slot />
</legend>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-legend) {
    all: unset;
    font-size: var(--wfs-font-size-md);
    line-height: var(--wfs-line-height-md);
    font-weight: var(--wfs-font-weight-medium);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-legend:has(+ .wfs-description)) {
    margin-bottom: var(--wfs-spacing-0-5x);
  }

  :global(.wfs-legend:not(:has(+ .wfs-description))) {
    margin-bottom: var(--wfs-spacing-3x);
  }
</style>
