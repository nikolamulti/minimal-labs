<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-note__content`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-note__content) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  :global(.wfs-note.wfs-note--horizontal .wfs-note__content) {
    gap: var(--wfs-spacing-1-5x);
    display: inline;
  }
</style>
