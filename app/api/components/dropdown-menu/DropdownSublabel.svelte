<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLSpanElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<span class={`${className || ''} wfs-dropdown__sublabel`} {...rest}>
  <slot />
</span>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-dropdown__sublabel) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-muted);
  }
</style>
