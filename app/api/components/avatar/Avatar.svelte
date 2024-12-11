<script lang="ts">
  import { Avatar } from 'bits-ui';
  import { Account } from '$lib/components/icons';

  type $$Props = Avatar.Props & {
    image?: string | null;
    fallback?: string | null;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: 'neutral' | 'primary' | 'success' | 'warning' | 'critical' | 'orange' | 'pink' | 'purple';
    alt?: string | null;
  };

  export let size: $$Props['size'] = 'md';
  export let image: $$Props['image'] = null;
  export let fallback: $$Props['fallback'] = '';
  export let color: $$Props['color'] = 'neutral';
  export let alt: $$Props['alt'] = null;

  const sizeClasses = {
    xs: 'wfs-avatar--xs',
    sm: 'wfs-avatar--sm',
    md: 'wfs-avatar--md',
    lg: 'wfs-avatar--lg',
  };

  const colors = {
    neutral: 'wfs-avatar--neutral',
    primary: 'wfs-avatar--primary',
    success: 'wfs-avatar--success',
    warning: 'wfs-avatar--warning',
    critical: 'wfs-avatar--critical',
    orange: 'wfs-avatar--orange',
    pink: 'wfs-avatar--pink',
    purple: 'wfs-avatar--purple',
  };

  const { class: className, ...rest } = $$restProps;
</script>

<Avatar.Root class={`${className || ''} wfs-avatar ${sizeClasses[size ?? 'md']} ${colors[color ?? 'neutral']}`} {...rest}>
  <Avatar.Image class="wfs-avatar__image" src={image} {alt} />
  <Avatar.Fallback class="wfs-avatar__fallback">
    {#if fallback}
      {fallback}
    {:else}
      <Account />
    {/if}
  </Avatar.Fallback>
</Avatar.Root>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-avatar) {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    border-radius: var(--wfs-radius-circular);
  }

  /*-------------------------------------------
  / Size styles
  -------------------------------------------*/

  :global(.wfs-avatar--xs) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: var(--wfs-font-size-sm);
    font-weight: var(--wfs-font-weight-medium);
  }

  :global(.wfs-avatar--sm) {
    width: 2rem;
    height: 2rem;
    font-size: var(--wfs-font-size-sm);
    font-weight: var(--wfs-font-weight-medium);
  }

  :global(.wfs-avatar--md) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: var(--wfs-font-size-md);
    font-weight: var(--wfs-font-weight-medium);
  }

  :global(.wfs-avatar--lg) {
    width: 3rem;
    height: 3rem;
    font-size: var(--wfs-font-size-lg);
    font-weight: var(--wfs-font-weight-medium);
  }

  /*-------------------------------------------
  / Color styles
  -------------------------------------------*/

  :global(.wfs-avatar--neutral) {
    background-color: var(--wfs-bg-default);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--primary) {
    background-color: var(--wfs-bg-primary);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--success) {
    background-color: var(--wfs-bg-success);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--warning) {
    background-color: var(--wfs-bg-warning);
    color: var(--wfs-fg-inverted);
  }

  :global(.wfs-avatar--critical) {
    background-color: var(--wfs-bg-critical);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--orange) {
    background-color: var(--wfs-bg-orange);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--pink) {
    background-color: var(--wfs-bg-pink);
    color: var(--wfs-fg-muted);
  }

  :global(.wfs-avatar--purple) {
    background-color: var(--wfs-bg-purple);
    color: var(--wfs-fg-muted);
  }

  /*-------------------------------------------
  / Image styles
  -------------------------------------------*/

  :global(.wfs-avatar__image) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /*-------------------------------------------
  / Fallback styles
  -------------------------------------------*/

  :global(.wfs-avatar__fallback) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*-------------------------------------------
  / Icon size styles
  -------------------------------------------*/

  :global(.wfs-avatar--xs * > svg) {
    width: var(--wfs-icon-xs);
    height: var(--wfs-icon-xs);
  }

  :global(.wfs-avatar--sm * > svg) {
    width: var(--wfs-icon-sm);
    height: var(--wfs-icon-sm);
  }

  :global(.wfs-avatar--md * > svg) {
    width: var(--wfs-icon-sm);
    height: var(--wfs-icon-sm);
  }

  :global(.wfs-avatar--lg * > svg) {
    width: var(--wfs-icon-md);
    height: var(--wfs-icon-md);
  }
</style>
