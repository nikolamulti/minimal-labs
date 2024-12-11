<script lang="ts">
  import { Accordion } from 'bits-ui';

  type $$Props = Accordion.ContentProps & {
    indent?: boolean;
  };

  export let indent: $$Props['indent'] = false;

  const { class: className, ...rest } = $$restProps;
</script>

<Accordion.Content class={`${className || ''} wfs-accordion__content ${indent ? 'wfs-accordion__content--indent' : ''}`} {...rest}>
  <slot />
</Accordion.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-accordion__content) {
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    padding: 0 var(--wfs-spacing-2x) var(--wfs-spacing-2x) var(--wfs-spacing-2x);
  }

  /*-------------------------------------------
  / Indent styles
  -------------------------------------------*/

  :global(.wfs-accordion__content--indent) {
    padding: 0 var(--wfs-spacing-2x) var(--wfs-spacing-2x) 1.75rem;
  }
</style>
