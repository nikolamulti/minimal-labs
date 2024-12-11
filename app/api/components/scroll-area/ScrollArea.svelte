<script lang="ts">
  import { ScrollArea } from 'bits-ui';

  type $$Props = ScrollArea.Props & {
    orientation?: ScrollArea.ScrollbarProps['orientation'] | 'both';
  };

  export let orientation: $$Props['orientation'] | 'both' = 'vertical';

  const { class: className, ...rest } = $$restProps;
</script>

<ScrollArea.Root class={`${className || ''} wfs-scroll-area`} {...rest}>
  <ScrollArea.Viewport class={`wfs-scroll-area__viewport wfs-scroll-area--${orientation}`}>
    <ScrollArea.Content class="wfs-scroll-area__content">
      <slot />
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  {#if orientation === 'vertical' || orientation === 'both'}
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
  {/if}
  {#if orientation === 'horizontal' || orientation === 'both'}
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
  {/if}
</ScrollArea.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-scroll-area) {
    position: relative;
  }

  :global(.wfs-scroll-area--vertical) {
    padding-right: var(--wfs-spacing-2-5x);
  }

  :global(.wfs-scroll-area--horizontal) {
    padding-bottom: var(--wfs-spacing-2-5x);
  }

  :global(.wfs-scroll-area--both) {
    padding-right: var(--wfs-spacing-2-5x);
    padding-bottom: var(--wfs-spacing-2-5x);
  }

  /*-------------------------------------------
  / Viewport styles
  -------------------------------------------*/

  :global(.wfs-scroll-area__viewport) {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
  }

  /*-------------------------------------------
  / Content styles
  -------------------------------------------*/

  :global(.wfs-scroll-area__content) {
    position: relative;
    overflow: auto;
    width: 100%;
    height: 100%;
  }

  /*-------------------------------------------
  / Scrollbar styles
  -------------------------------------------*/

  :global([data-scroll-area-scrollbar-x]) {
    width: 100%;
    padding: var(--wfs-spacing-0-5x) var(--wfs-spacing-0-5x);
    background-color: var(--wfs-bg-base);
    border-radius: var(--wfs-radius-circular);
  }

  :global([data-scroll-area-scrollbar-y]) {
    height: 100%;
    padding: var(--wfs-spacing-0-5x) var(--wfs-spacing-0-5x);
    background-color: var(--wfs-bg-base);
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Thumb styles
  -------------------------------------------*/

  :global([data-scroll-area-thumb-x]) {
    height: 0.375rem;
    border-radius: var(--wfs-radius-4xl);
    background-color: var(--wfs-bg-muted);
    --melt-scroll-area-thumb-height: 0.375rem;
  }

  :global([data-scroll-area-thumb-y]) {
    width: 0.375rem;
    border-radius: 128px;
    background-color: var(--wfs-bg-muted);
    --melt-scroll-area-thumb-width: 0.375rem;
  }
</style>
