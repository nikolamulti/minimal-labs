<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type $$Props = Tabs.Props & {
    variant?: 'pills' | 'underline';
  };

  export let variant: $$Props['variant'] = 'underline';

  const variantStore = writable(variant);
  setContext('tabsVariant', variantStore);

  const { class: className, ...rest } = $$restProps;
</script>

<Tabs.Root class={`${className || ''} wfs-tabs`} {...rest}>
  <slot />
</Tabs.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-tabs) {
    display: flex;
    flex-direction: column;
    appearance: none;
  }
</style>
