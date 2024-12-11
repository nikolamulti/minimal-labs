<script lang="ts">
  import { RadioGroup } from 'bits-ui';
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = RadioGroup.Props & {
    error?: boolean | undefined;
  };

  export let error: boolean | undefined = false;
  export let disabled: $$Props['disabled'] = false;

  const errorStore: Writable<boolean | undefined> = writable(error);
  const disabledStore: Writable<boolean> = writable(disabled);

  setContext('radioGroupError', errorStore);
  setContext('radioGroupDisabled', disabledStore);

  const { class: className, ...rest } = $$restProps;
</script>

<RadioGroup.Root class={`${className || ''} wfs-radio__group`} {disabled} {...rest}>
  <slot />
</RadioGroup.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-radio__group[data-orientation='horizontal']) {
    display: flex;
    gap: var(--wfs-spacing-4x);
  }

  :global(.wfs-radio__group[data-orientation='vertical']) {
    display: flex;
    flex-direction: column;
    gap: var(--wfs-spacing-1-5x);
  }
</style>
