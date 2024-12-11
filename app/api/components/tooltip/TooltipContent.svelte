<script lang="ts">
  import { Tooltip } from 'bits-ui';

  type $$Props = Tooltip.ContentProps & {
    width?: number | undefined;
  };
  type $$Events = Tooltip.ContentEvents;

  export let width: $$Props['width'] = undefined;
  export let sideOffset: $$Props['sideOffset'] = 4;

  const { class: className, ...rest } = $$restProps;
</script>

<Tooltip.Content class={`${className || ''} wfs-tooltip__content`} {sideOffset} style="max-width: {width}px;" on:pointerdown on:pointerenter {...rest}>
  <Tooltip.Arrow size={6} />
  <slot />
</Tooltip.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-tooltip__content) {
    width: max-content;
    white-space: normal;
    word-wrap: break-word;
    background-color: var(--wfs-bg-default);
    box-shadow: var(--wfs-shadow-action);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-2x);
    border-radius: var(--wfs-radius-sm);
    color: var(--wfs-fg-base);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
  }
</style>
