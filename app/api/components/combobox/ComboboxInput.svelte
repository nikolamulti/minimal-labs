<script lang="ts">
  import { Combobox } from 'bits-ui';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { ChevronSmallDown } from '$lib/components/icons';

  type $$Props = Combobox.InputProps & {
    icon?: ComponentType | null;
  };

  type $$Events = Combobox.InputEvents;

  export let icon: $$Props['icon'] = null;

  const disabled: Writable<boolean> = getContext('comboboxDisabled') || writable(false);
  const multiple: Writable<boolean> = getContext('comboboxMultiple') || writable(false);
  const selected: Writable<any> = getContext('comboboxSelected') || writable(undefined);
  const inputValue: Writable<any> = getContext('comboboxInputValue') || writable(undefined);

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  $: {
    if ($selected) {
      if ($multiple && Array.isArray($selected)) {
        $inputValue = $selected.map((item) => item.label).join(', ');
      } else if ($selected) {
        $inputValue = $selected.label || '';
      }
    }
  }

  const isDisabled = $disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-combobox__input-wrapper ${isDisabled ? 'wfs-combobox__input--disabled' : ''}`}>
  {#if icon}
    <svelte:component this={icon} class="wfs-combobox__input-leading-icon" aria-hidden="true" />
  {/if}
  <Combobox.Input
    class={`wfs-combobox__input ${icon ? 'wfs-combobox__input-leading-icon--has-icon' : ''}`}
    on:keydown
    on:input
    on:click
    bind:value={$inputValue}
    {...rest}
  />
  <ChevronSmallDown class="wfs-combobox__input-trailing-icon" aria-hidden="true" />
  <Combobox.HiddenInput />
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-combobox__input-wrapper) {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    gap: var(--wfs-spacing-1x);
    padding: 0 var(--wfs-spacing-1-5x);
    height: 1.5rem;
    box-shadow: inset 0 0 0 1px var(--wfs-border-muted);
    background-color: var(--wfs-bg-input);
    border-radius: var(--wfs-radius-sm);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-combobox__input) {
    all: unset;
    position: absolute;
    inset: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    padding-left: var(--wfs-spacing-1-5x);
    padding-right: calc(var(--wfs-icon-xs) + var(--wfs-spacing-1-5x) + var(--wfs-spacing-1x));
    border-radius: var(--wfs-radius-sm);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-combobox__input::placeholder) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-combobox__input-wrapper:hover:not(.wfs-combobox__input--disabled):not(.wfs-combobox__input:focus)) {
    box-shadow: inset 0 0 0 1px var(--wfs-border-default);
  }

  :global(.wfs-combobox__input-leading-icon) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-combobox__input:focus) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  :global(.wfs-combobox__input--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-combobox__input.wfs-combobox__input-leading-icon--has-icon) {
    padding-left: calc(var(--wfs-icon-xs) + var(--wfs-spacing-1-5x) + var(--wfs-spacing-1x));
  }

  :global(.wfs-combobox__input-trailing-icon) {
    display: flex;
    position: absolute;
    pointer-events: none;
    right: var(--wfs-spacing-1-5x);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
    color: var(--wfs-fg-subtle);
  }
</style>
