<script lang="ts" generics="T">
  import { Combobox } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  type $$Props = Combobox.Props<T, boolean>;

  export let disabled: $$Props['disabled'] = false;
  export let multiple: $$Props['multiple'] = false;
  export let selected: $$Props['selected'] = [];
  export let inputValue: $$Props['inputValue'] = undefined;
  export let touchedInput: $$Props['touchedInput'] = false;

  const disabledStore = writable(disabled);
  const multipleStore = writable(multiple);
  const selectedStore = writable(selected);
  const inputValueStore = writable(inputValue);

  $: $multipleStore = multiple || false;
  $: $selectedStore = selected || [];
  $: $inputValueStore = inputValue || '';

  setContext('comboboxDisabled', disabledStore);
  setContext('comboboxMultiple', multipleStore);
  setContext('comboboxSelected', selectedStore);
  setContext('comboboxInputValue', inputValueStore);
</script>

<Combobox.Root {disabled} {multiple} bind:selected bind:inputValue bind:touchedInput {...$$restProps}>
  <slot />
</Combobox.Root>
