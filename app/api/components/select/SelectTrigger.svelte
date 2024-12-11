<script lang="ts">
  import { Select } from 'bits-ui';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { ChevronSmallDown } from '$lib/components/icons';

  type $$Props = Select.TriggerProps & {
    icon?: ComponentType | null;
    placeholder?: Select.ValueProps['placeholder'];
  };

  type $$Events = Select.TriggerEvents;

  export let icon: $$Props['icon'] = null;
  export let placeholder: $$Props['placeholder'] = undefined;

  const disabled: Writable<boolean> = getContext('selectDisabled') || writable(false);
  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = $disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<Select.Trigger class={`${className || ''} wfs-select__trigger ${isDisabled ? 'wfs-select__trigger--disabled' : ''}`} on:click on:keydown {...rest}>
  {#if icon}
    <svelte:component this={icon} class="wfs-select__trigger-leading-icon" aria-hidden="true" />
  {/if}
  <slot />
  <Select.Value {placeholder} />
  <ChevronSmallDown class="wfs-select__trigger-trailing-icon" aria-hidden="true" />
</Select.Trigger>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-select__trigger) {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    background-color: var(--wfs-bg-input);
    border-radius: var(--wfs-radius-sm);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    color: var(--wfs-fg-base);
    box-shadow: inset 0 0 0 1px var(--wfs-border-muted);
  }

  :global([data-select-value]) {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-select__trigger > [data-placeholder]) {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-select__trigger:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  :global(.wfs-select__trigger--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-select__trigger-leading-icon) {
    display: flex;
    flex-shrink: 0;
    color: var(--wfs-fg-subtle);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-select__trigger-trailing-icon) {
    display: flex;
    flex-shrink: 0;
    color: var(--wfs-fg-subtle);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }
</style>
