<script lang="ts">
  import { Progress } from 'bits-ui';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  type $$Props = Progress.Props & {
    color?: 'primary' | 'neutral' | 'critical' | 'warning' | 'success' | undefined;
  };

  export let max: $$Props['max'] = 100;
  export let color: $$Props['color'] = 'primary';
  export let value: $$Props['value'] = 0;

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  $: progress.set(value ?? 0);

  const { class: className, ...rest } = $$restProps;
</script>

<Progress.Root class={`${className || ''} wfs-progress`} bind:value {...rest}>
  <div
    class={`wfs-progress__indicator ${color ? `wfs-progress__indicator--${color}` : ''}`}
    style:width="{max && $progress != null ? Math.min(Math.max(($progress / max) * 100, 0), 100) : 0}%"
  />
</Progress.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-progress) {
    position: relative;
    overflow: hidden;
    height: 0.5rem;
    width: 100%;
    background-color: var(--wfs-bg-muted);
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Indicator styles
  -------------------------------------------*/

  :global(.wfs-progress__indicator) {
    position: absolute;
    height: 100%;
    transition: transform 0.2s ease;
    transform-origin: left;
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Color styles
  -------------------------------------------*/

  :global(.wfs-progress__indicator--primary) {
    background-color: var(--wfs-bg-primary);
  }

  :global(.wfs-progress__indicator--neutral) {
    background-color: var(--wfs-bg-inverted);
  }

  :global(.wfs-progress__indicator--critical) {
    background-color: var(--wfs-bg-critical);
  }

  :global(.wfs-progress__indicator--warning) {
    background-color: var(--wfs-bg-warning);
  }

  :global(.wfs-progress__indicator--success) {
    background-color: var(--wfs-bg-success);
  }
</style>
