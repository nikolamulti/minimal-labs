<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type $$Props = Accordion.Props<boolean>;

  export let disabled: $$Props['disabled'] = false;

  const accordionDisabledStore = writable(disabled);
  setContext('accordionDisabled', accordionDisabledStore);
</script>

<Accordion.Root {disabled} {...$$restProps}>
  <slot />
</Accordion.Root>
