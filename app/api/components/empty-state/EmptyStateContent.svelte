<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-empty-state__content`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-empty-state__content) {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: var(--wfs-spacing-1x) 0;
    gap: var(--wfs-spacing-1x);
  }
</style>
