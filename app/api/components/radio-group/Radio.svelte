<script lang="ts">
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { RadioGroup } from 'bits-ui';

  type $$Props = RadioGroup.ItemProps;
  type $$Events = RadioGroup.ItemEvents;

  export let value: $$Props['value'] = '';
  export let disabled: $$Props['disabled'] = false;

  const radioGroupError: Writable<boolean | undefined> = getContext('radioGroupError') || writable(false);
  const radioGroupDisabled: Writable<boolean> = getContext('radioGroupDisabled') || writable(false);
  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = disabled || $fieldSetDisabled || $radioGroupDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<RadioGroup.Item
  class={`${className || ''} wfs-radio ${$radioGroupError ? 'wfs-radio--error' : ''}`}
  {value}
  disabled={isDisabled}
  on:click
  on:keydown
  on:focus
  {...rest}
>
  <RadioGroup.Input />
  <RadioGroup.ItemIndicator>
    <div class="wfs-radio__indicator" />
  </RadioGroup.ItemIndicator>
</RadioGroup.Item>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-radio) {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: var(--wfs-radius-circular);
    cursor: pointer;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-radio:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-radio[data-state='unchecked']) {
    background: var(--wfs-bg-input);
    box-shadow: inset 0 0 0 1px var(--wfs-border-medium);
  }

  :global(.wfs-radio[data-state='unchecked']:hover):not([data-disabled]) {
    background: var(--wfs-bg-muted);
  }

  :global(.wfs-radio[data-state='checked']) {
    background-color: var(--wfs-bg-primary);
    position: relative;
    width: 0.75rem;
    height: 0.75rem;
  }

  :global(.wfs-radio[data-state='checked']:hover:not([data-disabled])) {
    background-color: var(--wfs-bg-primary-hover);
  }

  :global(.wfs-radio.wfs-radio--error) {
    box-shadow: inset 0 0 0 1px var(--wfs-border-critical);
  }

  :global(.wfs-radio.wfs-radio--error[data-state='checked']) {
    background-color: var(--wfs-bg-critical);
    box-shadow: none;
  }

  :global(.wfs-radio.wfs-radio--error[data-state='checked']:hover:not([data-disabled])) {
    background-color: var(--wfs-bg-critical-hover);
  }

  :global(.wfs-radio[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  /*-------------------------------------------
  / Radio item indicator
  -------------------------------------------*/

  :global(.wfs-radio__indicator) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--wfs-persistent-white);
  }
</style>
