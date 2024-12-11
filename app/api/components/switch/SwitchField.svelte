<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-switch__field`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-switch__field:has(> .wfs-switch__wrapper:first-child)) {
    display: grid;
    grid-template-columns: min-content min-content 1fr;
    grid-template-rows: auto auto;
    white-space: nowrap;
    gap: 0 var(--wfs-spacing-1-5x);
    & > .wfs-label {
      margin-top: var(--wfs-spacing-0-5x);
    }
    & > .wfs-description {
      grid-column: 2 / -1;
    }
    & > .wfs-sublabel {
      margin-top: var(--wfs-spacing-0-5x);
      grid-column: 3;
      grid-row: 1;
    }
  }

  :global(.wfs-switch__field:has(> .wfs-switch__wrapper:last-child)) {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: auto auto;
    white-space: nowrap;
    gap: 0 var(--wfs-spacing-1-5x);
    & > .wfs-description {
      grid-column: 1 / -2;
    }
    & > .wfs-switch__wrapper {
      grid-column: 3;
      grid-row: 1;
    }
    & > .wfs-label {
      margin-top: var(--wfs-spacing-0-5x);
    }
    & > .wfs-sublabel {
      margin-top: var(--wfs-spacing-0-5x);
      grid-column: 2;
      grid-row: 1;
    }
  }
</style>
