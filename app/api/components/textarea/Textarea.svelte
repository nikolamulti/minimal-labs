<script lang="ts">
  import type { HTMLTextareaAttributes, DOMAttributes } from 'svelte/elements';

  type $$Props = HTMLTextareaAttributes & {
    error?: boolean | undefined;
  };

  type TextareaEvents = {
    'on:blur': DOMAttributes<HTMLTextAreaElement>['on:blur'];
    'on:change': DOMAttributes<HTMLTextAreaElement>['on:change'];
    'on:click': DOMAttributes<HTMLTextAreaElement>['on:click'];
    'on:focus': DOMAttributes<HTMLTextAreaElement>['on:focus'];
    'on:focusin': DOMAttributes<HTMLTextAreaElement>['on:focusin'];
    'on:focusout': DOMAttributes<HTMLTextAreaElement>['on:focusout'];
    'on:keydown': DOMAttributes<HTMLTextAreaElement>['on:keydown'];
    'on:keypress': DOMAttributes<HTMLTextAreaElement>['on:keypress'];
    'on:keyup': DOMAttributes<HTMLTextAreaElement>['on:keyup'];
    'on:mouseover': DOMAttributes<HTMLTextAreaElement>['on:mouseover'];
    'on:mouseenter': DOMAttributes<HTMLTextAreaElement>['on:mouseenter'];
    'on:mouseleave': DOMAttributes<HTMLTextAreaElement>['on:mouseleave'];
    'on:mousemove': DOMAttributes<HTMLTextAreaElement>['on:mousemove'];
    'on:paste': DOMAttributes<HTMLTextAreaElement>['on:paste'];
    'on:input': DOMAttributes<HTMLTextAreaElement>['on:input'];
  };

  type $$Events = TextareaEvents;

  export let error: $$Props['error'] = false;
  export let value: $$Props['value'] = undefined;

  const { class: className, ...rest } = $$restProps;
</script>

<textarea
  class={`${className || ''} wfs-textarea ${error ? 'wfs-textarea--error' : ''}`}
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

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-textarea) {
    min-height: 5rem;
    resize: vertical;
    padding: var(--wfs-spacing-2x);
    border: 1px solid var(--wfs-border-muted);
    background-color: var(--wfs-bg-input);
    border-radius: var(--wfs-radius-sm);
    font-family: var(--wfs-font-family);
    font-size: var(--wfs-font-size-sm);
    line-height: var(--wfs-line-height-sm);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-textarea::placeholder) {
    color: var(--wfs-fg-subtle);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-textarea:focus-visible:not(:disabled)) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  :global(.wfs-textarea:hover:not(:disabled):not(.wfs-textarea--error)) {
    border-color: var(--wfs-border-default);
  }

  :global(.wfs-textarea.wfs-textarea--error) {
    border-color: var(--wfs-border-critical);
  }

  :global(.wfs-textarea:disabled) {
    opacity: 0.4;
    cursor: not-allowed;
  }
</style>
