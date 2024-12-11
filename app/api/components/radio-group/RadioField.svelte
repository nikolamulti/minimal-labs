<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-radio__field`} {...rest}>
  <slot />
</div>

<style>
  /*-------------------------------------------
    / Base styles
    -------------------------------------------*/

  :global(.wfs-radio__field:has(> .wfs-radio:first-child)) {
    display: grid;
    grid-template-columns: min-content min-content 1fr;
    grid-template-rows: auto auto;
    white-space: nowrap;
    gap: 0 var(--wfs-spacing-1-5x);
    & > .wfs-radio {
      margin-top: var(--wfs-spacing-0-5x);
    }
    & > .wfs-sublabel {
      grid-column: 3;
      grid-row: 1;
    }
    & > .wfs-description {
      grid-column: 2 / -1;
    }
  }

  :global(.wfs-radio__field:has(> .wfs-radio:last-child)) {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: auto auto;
    white-space: nowrap;
    gap: 0 var(--wfs-spacing-1-5x);
    & > .wfs-description {
      grid-column: 1 / -2;
    }
    & > .wfs-sublabel {
      grid-column: 2;
      grid-row: 1;
    }
    & > .wfs-radio {
      grid-column: 3;
      grid-row: 1;
      margin-top: var(--wfs-spacing-0-5x);
    }
  }
</style>
