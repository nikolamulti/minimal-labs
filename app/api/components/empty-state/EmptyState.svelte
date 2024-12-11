<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    transparent?: boolean | undefined;
  };

  export let transparent: $$Props['transparent'] = false;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-empty-state ${transparent ? 'wfs-empty-state--transparent' : ''}`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-empty-state) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-3x);
    border-radius: var(--wfs-radius-sm);
    background-color: var(--wfs-bg-muted);
  }

  /*-------------------------------------------
  / Variant styles
  -------------------------------------------*/

  :global(.wfs-empty-state--transparent) {
    background-color: transparent;
  }
</style>
