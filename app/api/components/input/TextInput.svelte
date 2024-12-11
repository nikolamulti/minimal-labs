<script lang="ts">
  import type { HTMLInputAttributes, DOMAttributes } from 'svelte/elements';
  import { type ComponentType } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { getContext } from 'svelte';

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
  export let value: $$Props['value'] = undefined;
  export let disabled: $$Props['disabled'] = false;
  export let error: $$Props['error'] = false;

  const fieldSetDisabled: Writable<boolean> = getContext('fieldsetDisabled') || writable(false);

  const isDisabled = disabled || $fieldSetDisabled;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={`${className || ''} wfs-text-input__wrapper`}>
  {#if icon}
    <svelte:component this={icon} class={`wfs-text-input__leading-icon ${isDisabled ? 'wfs-text-input--disabled' : ''}`} aria-hidden="true" />
  {/if}
  <input
    class="wfs-text-input"
    class:wfs-text-input--has-icon={icon}
    class:wfs-text-input--error={error}
    class:wfs-text-input--disabled={isDisabled}
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
</div>

<style>
  /*-------------------------------------------
	/ Base styles
	-------------------------------------------*/

  :global(.wfs-text-input__wrapper) {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    padding: 0 var(--wfs-spacing-1-5x);
  }

  :global(.wfs-text-input) {
    position: absolute;
    inset: 0;
    width: 100%;
    padding-left: var(--wfs-spacing-1-5x);
    border: 1px solid var(--wfs-border-muted);
    background-color: var(--wfs-bg-input);
    border-radius: var(--wfs-radius-sm);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    font-weight: var(--wfs-font-weight-regular);
    color: var(--wfs-fg-base);
  }

  input:-webkit-autofill,
  input:autofill {
    -webkit-text-fill-color: var(--wfs-foreground-base);
    -webkit-box-shadow:
      0 0 0px 40rem var(--wfs-bg-input) inset,
      0 0 0px 40rem var(--wfs-bg-base) inset,
      0 0 0 0px var(--wfs-bg-base),
      0 0 0 0px var(--wfs-border-muted);
    border: 1px solid #3d3d3d;
  }

  /*-------------------------------------------
	/ State style
	-------------------------------------------*/

  :global(.wfs-text-input)::placeholder {
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-text-input:hover:not(.wfs-text-input--disabled):not(.wfs-text-input--error):not(:focus)) {
    border-color: var(--wfs-border-default);
  }

  :global(.wfs-text-input--error) {
    border-color: var(--wfs-border-critical);
  }

  :global(.wfs-text-input:focus:not(.wfs-text-input--disabled)) {
    border-color: var(--wfs-border-primary);
  }

  :global(.wfs-text-input:focus-visible:not(.wfs-text-input--disabled)) {
    outline: none;
  }

  :global(.wfs-text-input--disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /*-------------------------------------------
	/ Icon styles
	-------------------------------------------*/

  :global(.wfs-text-input__leading-icon) {
    display: flex;
    flex-shrink: 0;
    pointer-events: none;
    color: var(--wfs-fg-subtle);
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-text-input--has-icon) {
    padding-left: 1.625rem;
  }
</style>
