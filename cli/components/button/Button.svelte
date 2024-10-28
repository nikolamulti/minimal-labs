<script lang="ts">
  import { Button, type ButtonProps, type ButtonEvents } from 'bits-ui';
  import type { ComponentType } from 'svelte';
  import Spinner from '../spinner/Spinner.svelte';

  type CustomButtonEvents = {
    onClick?: (e: ButtonEvents['click']) => void;
    onKeydown?: (e: ButtonEvents['keydown']) => void;
    onChange?: (e: ButtonEvents['change']) => void;
    onKeyup?: (e: ButtonEvents['keyup']) => void;
    onMouseenter?: (e: ButtonEvents['mouseenter']) => void;
    onMouseleave?: (e: ButtonEvents['mouseleave']) => void;
    onMousedown?: (e: ButtonEvents['mousedown']) => void;
    onMouseup?: (e: ButtonEvents['mouseup']) => void;
    onPointerdown?: (e: ButtonEvents['pointerdown']) => void;
    onPointerup?: (e: ButtonEvents['pointerup']) => void;
  };

  type CustomButtonProps = ButtonProps & {
    variant: 'default' | 'primary' | 'danger' | 'outline' | 'ghost';
    startIcon: ComponentType | null;
    endIcon: ComponentType | null;
    disabled: boolean;
    loading: boolean;
  };

  export let variant: CustomButtonProps['variant'] = 'default';
  export let startIcon: CustomButtonProps['startIcon'] = null;
  export let endIcon: CustomButtonProps['endIcon'] = null;
  export let disabled: CustomButtonProps['disabled'] = false;
  export let loading: CustomButtonProps['loading'] = false;
  export let onClick: CustomButtonEvents['onClick'] = undefined;
  export let onKeydown: CustomButtonEvents['onKeydown'] = undefined;
  export let onChange: CustomButtonEvents['onChange'] = undefined;
  export let onKeyup: CustomButtonEvents['onKeyup'] = undefined;
  export let onMouseenter: CustomButtonEvents['onMouseenter'] = undefined;
  export let onMouseleave: CustomButtonEvents['onMouseleave'] = undefined;
  export let onMousedown: CustomButtonEvents['onMousedown'] = undefined;
  export let onMouseup: CustomButtonEvents['onMouseup'] = undefined;
  export let onPointerdown: CustomButtonEvents['onPointerdown'] = undefined;
  export let onPointerup: CustomButtonEvents['onPointerup'] = undefined;

  const variants: Record<CustomButtonProps['variant'], string> = {
    default: 'wfs-button--default',
    primary: 'wfs-button--primary',
    danger: 'wfs-button--danger',
    outline: 'wfs-button--outline',
    ghost: 'wfs-button--ghost',
  };
</script>

<Button.Root
  class={`wfs-button ${variants[variant]} ${loading ? 'wfs-button--loading' : ''}`}
  {disabled}
  on:click={onClick}
  on:keydown={onKeydown}
  on:change={onChange}
  on:keyup={onKeyup}
  on:mouseenter={onMouseenter}
  on:mouseleave={onMouseleave}
  on:mousedown={onMousedown}
  on:mouseup={onMouseup}
  on:pointerdown={onPointerdown}
  on:pointerup={onPointerup}
  {...$$restProps}
>
  {#if loading}
    <Spinner size={16} />
  {:else}
    {#if startIcon}
      <svelte:component this={startIcon} class="wfs-button_start-icon" />
    {/if}
    <div class="wfs-button_text-wrapper">
      <slot />
    </div>
    {#if endIcon}
      <svelte:component this={endIcon} class="wfs-button_end-icon" />
    {/if}
  {/if}
</Button.Root>

<style>
  /*-------------------------------------------
  / Styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button) {
    border-radius: var(--border-radius);
    padding: var(--spacing-1x) var(--spacing-2x);
    display: inline-flex;
    gap: var(--spacing-0-5x);
    align-items: center;
    justify-content: center;
    font-size: var(--text-sm-font-size);
    line-height: var(--text-sm-line-height);
    color: var(--foreground-base);
    cursor: pointer;
  }

  :global([data-button-root]:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :global([data-button-root].wfs-button--loading) {
    cursor: wait;
  }

  /*-------------------------------------------
  / Default styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button--default) {
    background: var(--background-action1);
    box-shadow: var(--shadow-action);
  }

  :global([data-button-root].wfs-button--default:hover):not(:disabled) {
    background: var(--background-action-hover2);
  }

  :global([data-button-root].wfs-button:focus-visible) {
    outline: 1px solid var(--border-primary);
    outline-offset: 1px;
  }

  /*-------------------------------------------
  / Primary styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button--primary) {
    background-color: var(--background-primary);
    box-shadow: var(--shadow-action);
  }

  :global([data-button-root].wfs-button--primary:hover):not(:disabled) {
    background-color: var(--background-primary-hover);
  }

  /*-------------------------------------------
  / Danger styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button--danger) {
    background-color: var(--background-critical);
    box-shadow: var(--shadow-action);
  }

  :global([data-button-root].wfs-button--danger:hover):not(:disabled) {
    background-color: var(--background-critical-hover);
  }

  /*-------------------------------------------
  / Outline styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button--outline) {
    box-shadow: 0px 0px 0px 1px var(--border-muted);
  }

  :global([data-button-root].wfs-button--outline:hover):not(:disabled) {
    background-color: var(--background-muted);
  }

  /*-------------------------------------------
  / Ghost styles
  -------------------------------------------*/

  :global([data-button-root].wfs-button--ghost) {
    background: transparent;
  }

  :global([data-button-root].wfs-button--ghost:hover):not(:disabled) {
    background: var(--background-action-hover2);
  }

  /*-------------------------------------------
  / Icon styles
  -------------------------------------------*/

  :global([data-button-root]:has(svg + .wfs-button_text-wrapper)) {
    padding-left: var(--spacing-1x);
  }

  :global([data-button-root]:has(.wfs-button_text-wrapper + svg)) {
    padding-right: var(--spacing-1x);
  }

  :global([data-button-root]:has(svg + .wfs-button_text-wrapper + svg)) {
    padding-left: var(--spacing-1x);
    padding-right: var(--spacing-1x);
  }
</style>
