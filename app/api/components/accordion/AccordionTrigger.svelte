<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { getContext, type ComponentType } from 'svelte';
  import { ChevronSmallRight } from '$lib/components/icons';
  import { writable, type Writable } from 'svelte/store';

  type $$Props = Accordion.TriggerProps & {
    icon?: ComponentType | null;
    level?: Accordion.HeaderProps['level'];
  };
  type $$Events = Accordion.TriggerEvents;

  export let level: $$Props['level'] = 3;
  export let icon: $$Props['icon'] = null;

  const accordionDisabledStore: Writable<boolean> = getContext('accordionDisabled') || writable('false');
  const accordionItemDisabledStore: Writable<boolean> = getContext('accordionItemDisabled') || writable('false');

  const isDisabled = $accordionDisabledStore || $accordionItemDisabledStore;

  const { class: className, ...rest } = $$restProps;
</script>

<Accordion.Header {level}>
  <Accordion.Trigger class={`${className || ''} wfs-accordion__trigger ${isDisabled ? 'wfs-accordion__trigger--disabled' : ''}`} on:click on:keydown {...rest}>
    <div class="wfs-accordion__trigger-content">
      {#if icon}
        <svelte:component this={icon} class="wfs-accordion__trigger-leading-icon" aria-hidden="true" />
      {/if}
      <slot />
    </div>
    <ChevronSmallRight class="wfs-accordion__trigger-trailing-icon" aria-hidden="true" />
  </Accordion.Trigger>
</Accordion.Header>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-accordion__header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--wfs-font-size-md);
    line-height: var(--wfs-line-height-md);
    font-weight: var(--wfs-font-weight-medium);
  }

  /*-------------------------------------------
  / Trigger styles
  -------------------------------------------*/

  :global(.wfs-accordion__trigger) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--wfs-spacing-3x);
    padding-top: var(--wfs-spacing-2x);
    padding-bottom: var(--wfs-spacing-2x);
    padding-left: var(--wfs-spacing-2x);
    padding-right: var(--wfs-spacing-1x);
    cursor: pointer;
  }

  :global(.wfs-accordion__trigger:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }

  :global(.wfs-accordion__trigger-content) {
    display: flex;
    gap: var(--wfs-spacing-1x);
    align-items: center;
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global(.wfs-accordion__trigger-leading-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
    color: var(--wfs-fg-base);
  }

  :global(.wfs-accordion__trigger-trailing-icon) {
    display: flex;
    flex-shrink: 0;
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
    color: var(--wfs-fg-subtle);
  }

  :global(.wfs-accordion__trigger[data-state='open'] > .wfs-accordion__trigger-trailing-icon) {
    transform: rotate(90deg);
  }

  /*-------------------------------------------
  / State styles
  -------------------------------------------*/

  :global(.wfs-accordion__trigger--disabled .wfs-accordion__trigger-leading-icon),
  :global(.wfs-accordion__trigger--disabled .wfs-accordion__trigger-trailing-icon),
  :global(.wfs-accordion__trigger--disabled) {
    color: var(--wfs-fg-disabled);
    cursor: not-allowed;
  }
</style>
