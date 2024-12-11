<script lang="ts">
  import type { HTMLFieldsetAttributes } from 'svelte/elements';
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = HTMLFieldsetAttributes;

  export let disabled: $$Props['disabled'] = false;

  const disabledStore: Writable<boolean> = writable(!!disabled);
  setContext('fieldsetDisabled', disabledStore);

  const { class: className, ...rest } = $$restProps;
</script>

<fieldset class={`${className || ''} wfs-fieldset`} {disabled} {...rest}>
  <slot />
</fieldset>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-fieldset) {
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--wfs-spacing-3x);
  }
</style>
