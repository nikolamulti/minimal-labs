<script lang="ts" generics="T">
  import { Select } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type $$Props = Select.Props<T, boolean>;

  export let disabled: $$Props['disabled'] = false;

  const disabledStore = writable(disabled);
  setContext('selectDisabled', disabledStore);
</script>

<Select.Root {disabled} {...$$restProps}>
  <slot />
  <Select.Input />
</Select.Root>
