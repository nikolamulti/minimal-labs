<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type $$Props = Accordion.ItemProps;

  export let value: $$Props['value'] = '';
  export let disabled: $$Props['disabled'] = false;

  const accordionItemDisabledStore = writable(disabled);
  setContext('accordionItemDisabled', accordionItemDisabledStore);

  const { class: className, ...rest } = $$restProps;
</script>

<Accordion.Item class={`${className || ''} wfs-accordion__item`} {value} {disabled} {...rest}>
  <slot />
</Accordion.Item>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-accordion__item) {
    color: var(--wfs-fg-base);
    position: relative;
    box-shadow: 0px 1px 0px var(--wfs-border-muted);
  }
</style>
