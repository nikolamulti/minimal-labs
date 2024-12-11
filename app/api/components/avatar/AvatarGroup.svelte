<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    gap?: 'xs' | 'sm' | 'md' | 'lg';
  };

  export let gap: $$Props['gap'] = 'md';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-avatar__group wfs-avatar__group--gap-${gap}`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-avatar__group) {
    display: flex;
  }

  :global(.wfs-avatar__group > .wfs-avatar) {
    border: 2px solid var(--wfs-border-base);
    box-sizing: content-box;
  }

  /*-------------------------------------------
  / Gap styles
  -------------------------------------------*/

  :global(.wfs-avatar__group--gap-xs > .wfs-avatar:not(:first-child)) {
    margin-left: -0.375rem;
  }

  :global(.wfs-avatar__group--gap-sm > .wfs-avatar:not(:first-child)) {
    margin-left: -0.5rem;
  }

  :global(.wfs-avatar__group--gap-md > .wfs-avatar:not(:first-child)) {
    margin-left: -0.625rem;
  }

  :global(.wfs-avatar__group--gap-lg > .wfs-avatar:not(:first-child)) {
    margin-left: -0.75rem;
  }
</style>
