<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-select__description`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__description) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-muted);
  }
</style>
