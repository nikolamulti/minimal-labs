<script lang="ts">
  import type { HTMLInputAttributes, DOMAttributes } from 'svelte/elements';
  import { getContext, type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { ChevronSmallUp, ChevronSmallDown } from '$lib/components/icons';

  type $$Props = HTMLInputAttributes & {
    icon?: ComponentType | null;
    error?: boolean | undefined;
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

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;

  let incrementInterval: ReturnType<typeof setInterval>;
  let decrementInterval: ReturnType<typeof setInterval>;
  const INITIAL_DELAY = 500;
  const INTERVAL_DELAY = 50;

  function increment() {
    if (!isDisabled) {
      let numValue = typeof value === 'number' ? value : 0;
      const maxValue = typeof max === 'string' ? parseFloat(max) : max ?? Infinity;
      if (numValue < maxValue) {
        value = numValue + 1;
      }
    }
  }

  function decrement() {
    if (!isDisabled) {
      let numValue = typeof value === 'number' ? value : 0;
      const minValue = typeof min === 'string' ? parseFloat(min) : min ?? -Infinity;
      if (min === 0 && typeof value === 'undefined') {
        value = 0;
      } else if (numValue > minValue) {
        value = numValue - 1;
      }
    }
  }

  function handleIncrementMouseDown() {
    if (isDisabled) return;
    increment();
    const timeoutId = setTimeout(() => {
      incrementInterval = setInterval(increment, INTERVAL_DELAY);
    }, INITIAL_DELAY);

    const cleanup = () => {
      clearTimeout(timeoutId);
      clearInterval(incrementInterval);
      window.removeEventListener('mouseup', cleanup);
    };

    window.addEventListener('mouseup', cleanup);
  }

  function handleDecrementMouseDown() {
    if (isDisabled) return;
    decrement();
    const timeoutId = setTimeout(() => {
      decrementInterval = setInterval(decrement, INTERVAL_DELAY);
    }, INITIAL_DELAY);

    const cleanup = () => {
      clearTimeout(timeoutId);
      clearInterval(decrementInterval);
      window.removeEventListener('mouseup', cleanup);
    };

    window.addEventListener('mouseup', cleanup);
  }

  $: if (typeof value === 'number') {
    const maxNum = typeof max === 'string' ? parseFloat(max) : max ?? Infinity;
    if (value > maxNum) {
      value = maxNum;
    }
    const minNum = typeof min === 'string' ? parseFloat(min) : min ?? -Infinity;
    if (min !== undefined && value < minNum) {
      value = minNum;
    }
  }
</script>

<div class={`${className || ''} wfs-number-input__wrapper`}>
  {#if icon}
    <svelte:component this={icon} class={`wfs-number-input__leading-icon ${isDisabled ? 'wfs-number-input--disabled' : ''}`} aria-hidden="true" />
  {/if}
  <input
    type="number"
    class="wfs-number-input"
    class:wfs-number-input--has-icon={icon}
    class:wfs-number-input--disabled={isDisabled}
    class:wfs-number-input--error={error}
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
  <div class="wfs-number-input__unit-controls">
    <button
      class="wfs-number-input__unit-button wfs-number-input__unit-button-up"
      class:wfs-number-input__unit-button--disabled={isDisabled}
      disabled={isDisabled}
      on:mousedown={handleIncrementMouseDown}
    >
      <ChevronSmallUp class="wfs-number-input__unit-button-icon" aria-hidden="true" />
    </button>
    <button
      class="wfs-number-input__unit-button wfs-number-input__unit-button-down"
      class:wfs-number-input__unit-button--disabled={isDisabled}
      disabled={isDisabled}
      on:mousedown={handleDecrementMouseDown}
    >
      <ChevronSmallDown class="wfs-number-input__unit-button-icon" aria-hidden="true" />
    </button>
  </div>
</div>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-number-input__wrapper) {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    padding: 0 var(--wfs-spacing-1-5x);
  }

  :global(.wfs-number-input) {
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

  :global(.wfs-number-input__leading-icon) {
    display: flex;
    flex-shrink: 0;
    pointer-events: none;
    color: var(--wfs-fg-subtle);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-number-input--has-icon) {
    padding-left: 1.625rem;
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-number-input)::placeholder {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-number-input:hover:not(.wfs-number-input--disabled):not(.wfs-number-input--error):not(:focus)) {
    border-color: var(--wfs-border-default);
  }

  :global(.wfs-number-input:focus:not(.wfs-number-input--disabled)) {
    border-color: var(--wfs-border-primary);
  }

  :global(.wfs-number-input:focus-visible:not(.wfs-number-input--disabled)) {
    outline: none;
  }

  :global(.wfs-number-input--error) {
    border-color: var(--wfs-border-critical);
  }

  :global(.wfs-number-input--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
  / Unit controls styles
  -------------------------------------------*/

  :global(.wfs-number-input__unit-controls) {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 var(--wfs-radius-sm) var(--wfs-radius-sm) 0;
    overflow: hidden;
  }

  :global(.wfs-number-input__unit-button) {
    height: 100%;
    width: 1rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    color: var(--wfs-fg-muted);
    background: var(--wfs-bg-action);
    cursor: pointer;
  }

  :global(.wfs-number-input__unit-button-up) {
    box-shadow: 0 1px 0 0 var(--wfs-border-muted);
  }

  :global(.wfs-number-input__unit-button-icon) {
    display: flex;
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
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
  / Unit controls state styles
  -------------------------------------------*/

  :global(.wfs-number-input__unit-button:hover:not(.wfs-number-input__unit-button--disabled)) {
    background: var(--wfs-bg-action-hover);
  }

  :global(.wfs-number-input__unit-button--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :global(.wfs-number-input__unit-button:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  :global(.wfs-number-input__unit-button-up:focus-visible) {
    border-radius: 0 var(--wfs-radius-sm) 0 0;
  }

  :global(.wfs-number-input__unit-button-down:focus-visible) {
    border-radius: 0 0 var(--wfs-radius-sm) 0;
  }
</style>
