<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
    elevation?: '1' | '2' | '3';
  };

  export let orientation: $$Props['orientation'] = 'horizontal';
  export let elevation: $$Props['elevation'] = '1';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-divider--${orientation} wfs-divider--elevation-${elevation}`} {...rest} />

<style>
  /*-------------------------------------------
  / Orientation styles
  -------------------------------------------*/

  :global(.wfs-divider--horizontal) {
    height: 1px;
    width: 100%;
  }

  :global(.wfs-divider--vertical) {
    width: 1px;
    height: 100%;
  }

  /*-------------------------------------------
  / Elevation styles
  -------------------------------------------*/

  :global(.wfs-divider--elevation-1) {
    background-color: var(--wfs-border-muted);
  }

  :global(.wfs-divider--elevation-2) {
    background-color: var(--wfs-border-default);
  }

  :global(.wfs-divider--elevation-3) {
    background-color: var(--wfs-border-medium);
  }
</style>
