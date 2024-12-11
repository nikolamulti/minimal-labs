<script lang="ts">
  import { Checkbox } from 'bits-ui';
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { CheckDefault, Subtract } from '$lib/components/icons';

  type $$Props = Checkbox.Props & {
    error?: boolean | undefined;
  };

  type $$Events = Checkbox.Events;

  export let checked: $$Props['checked'] = false;
  export let disabled: $$Props['disabled'] = false;
  export let error: $$Props['error'] = false;

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);
  const isDisabled = disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<Checkbox.Root class={`${className || ''} wfs-checkbox ${error ? 'wfs-checkbox--error' : ''}`} disabled={isDisabled} bind:checked on:click on:keydown {...rest}>
  <Checkbox.Input />
  <Checkbox.Indicator class="wfs-checkbox__indicator" let:isChecked let:isIndeterminate>
    {#if isChecked}
      <CheckDefault class="wfs-checkbox__indicator--checked" aria-hidden="true" />
    {:else if isIndeterminate}
      <Subtract class="wfs-checkbox__indicator--indeterminate" aria-hidden="true" />
    {/if}
  </Checkbox.Indicator>
</Checkbox.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-checkbox) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: var(--wfs-radius-xs);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-checkbox:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-checkbox[data-state='unchecked']) {
    background: var(--wfs-bg-input);
    box-shadow:
      inset 0 0 0 1px var(--wfs-border-medium),
      var(--wfs-shadow-input);
  }

  :global(.wfs-checkbox[data-state='unchecked']:hover):not([data-disabled]) {
    background: var(--wfs-bg-muted);
  }

  :global(.wfs-checkbox[data-state='checked']) {
    background-color: var(--wfs-bg-primary);
    box-shadow: none;
  }

  :global(.wfs-checkbox[data-state='indeterminate']) {
    background-color: var(--wfs-bg-primary);
    box-shadow: none;
  }

  :global(.wfs-checkbox[data-disabled]) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :global(.wfs-checkbox.wfs-checkbox--error) {
    box-shadow: inset 0 0 0 1px var(--wfs-border-critical);
  }

  :global(.wfs-checkbox.wfs-checkbox--error[data-state='checked']) {
    background-color: var(--wfs-bg-critical);
    box-shadow: none;
  }

  :global(.wfs-checkbox.wfs-checkbox--error[data-state='indeterminate']) {
    background-color: var(--wfs-bg-critical);
    box-shadow: none;
  }

  /*-------------------------------------------
  / Indicator styles
  -------------------------------------------*/

  :global(.wfs-checkbox__indicator) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--wfs-fg-base);
  }

  :global(.wfs-checkbox__indicator--checked),
  :global(.wfs-checkbox__indicator--indeterminate) {
    width: 0.75rem;
    height: 0.75rem;
  }
</style>
