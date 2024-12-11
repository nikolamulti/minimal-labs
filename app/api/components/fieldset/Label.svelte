<script lang="ts">
  import { Label } from 'bits-ui';

  type $$Props = Label.Props;
  type $$Events = Label.Events;

  const { class: className, ...rest } = $$restProps;
</script>

<Label.Root class={`${className || ''} wfs-label`} on:mousedown {...rest}>
  <slot />
</Label.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-label) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-muted);
  }
</style>
