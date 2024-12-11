<script lang="ts">
  import type { HTMLInputAttributes, DOMAttributes } from 'svelte/elements';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { Select } from 'bits-ui';
  import { CheckDefault } from '$lib/components/icons';

  type $$Props = HTMLInputAttributes & {
    icon?: ComponentType | null;
    error?: boolean | undefined;
    defaultUnit?: 'px' | '%' | 'em' | 'rem' | 'ch' | 'vw' | 'vh' | 'svw' | 'svh' | 'auto';
  };

  type InputEvents = {
    'on:blur': DOMAttributes<HTMLInputElement>['on:blur'];
    'on:change': DOMAttributes<HTMLInputElement>['on:change'];
    'on:click': DOMAttributes<HTMLInputElement>['on:click'];
    'on:focus': DOMAttributes<HTMLInputElement>['on:focus'];
    'on:focusin': DOMAttributes<HTMLInputElement>['on:focusin'];
    'on:focusout': DOMAttributes<HTMLInputElement>['on:focusout'];
    'on:keydown': DOMAttributes<HTMLInputElement>['on:keydown'];
    'on:keypress': DOMAttributes<HTMLInputElement>['on:keypress'];
    'on:keyup': DOMAttributes<HTMLInputElement>['on:keyup'];
    'on:mouseover': DOMAttributes<HTMLInputElement>['on:mouseover'];
    'on:mouseenter': DOMAttributes<HTMLInputElement>['on:mouseenter'];
    'on:mouseleave': DOMAttributes<HTMLInputElement>['on:mouseleave'];
    'on:mousemove': DOMAttributes<HTMLInputElement>['on:mousemove'];
    'on:paste': DOMAttributes<HTMLInputElement>['on:paste'];
    'on:input': DOMAttributes<HTMLInputElement>['on:input'];
  };

  type $$Events = InputEvents;

  export let icon: $$Props['icon'] = null;
  export let disabled: $$Props['disabled'] = false;
  export let error: $$Props['error'] = false;
  export let value: $$Props['value'] = undefined;
  export let min: $$Props['min'] = undefined;
  export let max: $$Props['max'] = undefined;
  export let defaultUnit: $$Props['defaultUnit'] = 'px';

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;

  const units = [
    { value: 'px', label: 'PX' },
    { value: '%', label: '%' },
    { value: 'em', label: 'EM' },
    { value: 'rem', label: 'REM' },
    { value: 'ch', label: 'CH' },
    { value: 'vw', label: 'VW' },
    { value: 'vh', label: 'VH' },
    { value: 'svw', label: 'SVW' },
    { value: 'svh', label: 'SVH' },
    { value: 'auto', label: 'AUTO' },
  ];
</script>

<div class={`${className || ''} wfs-unit-input__wrapper`}>
  {#if icon}
    <svelte:component this={icon} class={`wfs-unit-input__leading-icon ${isDisabled ? 'wfs-unit-input--disabled' : ''}`} aria-hidden="true" />
  {/if}
  <input
    type="number"
    class="wfs-unit-input"
    class:wfs-unit-input--has-icon={icon}
    class:wfs-unit-input--disabled={isDisabled}
    class:wfs-unit-input--error={error}
    {min}
    {max}
    disabled={isDisabled}
    bind:value
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:mousemove
    on:paste
    on:input
    {...rest}
  />
  <div class="wfs-unit-input__select">
    <Select.Root disabled={isDisabled} name="unit" items={units} selected={units.find((unit) => unit.value === defaultUnit)}>
      <Select.Trigger class={`wfs-unit-input__select-trigger ${isDisabled ? 'wfs-unit-input__select-trigger--disabled' : ''}`}>
        <Select.Value />
      </Select.Trigger>
      <Select.Content sameWidth={false} align="end" sideOffset={4} class="wfs-unit-input__select-content">
        {#each units as unit}
          <Select.Item value={unit.value} label={unit.label} class="wfs-unit-input__select-item">
            <Select.ItemIndicator class="wfs-unit-input__select-item-indicator">
              <CheckDefault class="wfs-unit-input__select-item-indicator" aria-hidden="true" />
            </Select.ItemIndicator>
            {unit.label}
          </Select.Item>
        {/each}
      </Select.Content>
      <Select.Input />
    </Select.Root>
  </div>
</div>

<style>
  /*-------------------------------------------
	/ Base styles
	-------------------------------------------*/

  :global(.wfs-unit-input__wrapper) {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    padding: 0 var(--wfs-spacing-1-5x);
  }

  :global(.wfs-unit-input) {
    position: absolute;
    inset: 0;
    padding-left: var(--wfs-spacing-1-5x);
    border: 1px solid var(--wfs-border-muted);
    background-color: var(--wfs-bg-input);
    border-radius: var(--wfs-radius-sm);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-unit-input__leading-icon) {
    display: flex;
    flex-shrink: 0;
    pointer-events: none;
    color: var(--wfs-fg-subtle);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-unit-input--has-icon) {
    padding-left: 1.625rem;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: none;
  }

  /*-------------------------------------------
	/ State styles
	-------------------------------------------*/

  :global(.wfs-unit-input)::placeholder {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-unit-input:hover:not(.wfs-unit-input--disabled):not(.wfs-unit-input--error):not(:focus)) {
    border-color: var(--wfs-border-default);
  }

  :global(.wfs-unit-input:focus:not(.wfs-unit-input--disabled)) {
    border-color: var(--wfs-border-primary);
  }

  :global(.wfs-unit-input:focus-visible:not(.wfs-unit-input--disabled)) {
    outline: none;
  }

  :global(.wfs-unit-input--error) {
    border-color: var(--wfs-border-critical);
  }

  :global(.wfs-unit-input--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
	/ Select styles
	-------------------------------------------*/

  :global(.wfs-unit-input__select) {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1px 1px 1px 0;
  }

  :global(.wfs-unit-input__select-content) {
    width: 5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--wfs-bg-muted);
    box-shadow: var(--wfs-shadow-menu);
    border-radius: var(--wfs-radius-sm);
  }

  :global(.wfs-unit-input__select-item) {
    display: flex;
    align-items: start;
    cursor: pointer;
    user-select: none;
    gap: var(--wfs-spacing-1x);
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1-5x);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-unit-input__select-item-indicator) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-unit-input__select-trigger) {
    height: 100%;
    font-size: 9px;
    line-height: 12px;
    font-weight: var(--wfs-font-weight-medium);
    letter-spacing: -0.05em;
    text-align: center;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0 var(--wfs-radius-sm) var(--wfs-radius-sm) 0;
    padding: var(--wfs-spacing-1x) var(--wfs-spacing-1x);
  }

  :global(.wfs-unit-input__select-item-indicator) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  /*-------------------------------------------
	/ Select state styles
	-------------------------------------------*/

  :global(.wfs-unit-input__select-trigger > [data-select-value]) {
    text-overflow: clip;
  }

  :global(.wfs-unit-input__select-trigger:hover:not([data-disabled])) {
    background-color: var(--wfs-bg-base);
  }

  :global(.wfs-unit-input__select-trigger:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: 0px;
  }

  :global(.wfs-unit-input__select-trigger--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }
</style>
