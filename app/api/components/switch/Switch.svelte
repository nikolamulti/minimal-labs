<script lang="ts">
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { Switch, type SwitchProps } from 'bits-ui';

  type $$Props = Switch.Props;
  type $$Events = Switch.Events;

  export let disabled: SwitchProps['disabled'] = false;

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<div class="wfs-switch__wrapper">
  <Switch.Root class={`${className || ''} wfs-switch`} disabled={isDisabled} on:click on:keydown {...rest}>
    <Switch.Thumb class="wfs-switch__thumb" />
    <Switch.Input />
  </Switch.Root>
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  .wfs-switch__wrapper {
    height: 16px;
  }

  :global(.wfs-switch) {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 2rem;
    height: 1.25rem;
    background-color: var(--wfs-bg-default);
    border-radius: var(--wfs-radius-circular);
    padding: var(--wfs-spacing-0-5x);
    box-shadow: inset 0 0 0 1px var(--wfs-border-medium);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-switch:hover):not([data-disabled]):not([data-checked]) {
    background: var(--wfs-bg-action-hover);
  }

  :global(.wfs-switch[data-disabled]) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :global(.wfs-switch:focus-visible) {
    outline: solid 1px var(--wfs-border-primary);
    outline-offset: 1px;
  }

  :global(.wfs-switch[data-checked]) {
    background-color: var(--wfs-bg-primary);
    box-shadow: none;
  }

  /*-------------------------------------------
  / Thumb styles
  -------------------------------------------*/

  :global(.wfs-switch__thumb) {
    width: 1rem;
    height: 1rem;
    background-color: var(--wfs-persistent-white);
    border-radius: var(--wfs-radius-circular);
    transition: transform 0.2s;
  }

  /*-------------------------------------------
  / Thumb state styles
  -------------------------------------------*/

  :global(.wfs-switch__thumb[data-checked]) {
    transform: translateX(0.75rem);
  }
</style>
