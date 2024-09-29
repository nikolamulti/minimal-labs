<script lang="ts">
  import { Avatar, type AvatarProps, type AvatarImageProps, type AvatarFallbackProps } from 'bits-ui';
  import { Account } from '@components/icons';

  type CustomAvatarProps = {
    size: 'xs' | 'sm' | 'md' | 'lg';
    color: 'neutral' | 'primary' | 'success' | 'warning' | 'critical' | 'orange' | 'pink' | 'purple';
    image: string | null;
    fallback: string | null;
  };

  // Avatar component props
  export let delayMs: AvatarProps['delayMs'] = undefined;
  export let loadingStatus: AvatarProps['loadingStatus'] = undefined;
  export let onLoadingStatusChange: AvatarProps['onLoadingStatusChange'] = undefined;
  export let avatarAsChild: AvatarProps['asChild'] = undefined;
  export let avatarEl: AvatarProps['el'] = undefined;

  export let avatarImageAsChild: AvatarImageProps['asChild'] = undefined;
  export let avatarImageEl: AvatarImageProps['el'] = undefined;

  export let avatarFallbackAsChild: AvatarFallbackProps['asChild'] = undefined;
  export let avatarFallbackEl: AvatarFallbackProps['el'] = undefined;

  export let size: CustomAvatarProps['size'] = 'md';
  export let image: CustomAvatarProps['image'] = null;
  export let fallback: CustomAvatarProps['fallback'] = '';
  export let color: CustomAvatarProps['color'] = 'neutral';

  // Define size classes
  const sizeClasses = {
    xs: 'avatar-xs',
    sm: 'avatar-sm',
    md: 'avatar-md',
    lg: 'avatar-lg',
  };

  // Define color variant classes
  const colors = {
    neutral: 'avatar-neutral',
    primary: 'avatar-primary',
    success: 'avatar-success',
    warning: 'avatar-warning',
    critical: 'avatar-critical',
    orange: 'avatar-orange',
    pink: 'avatar-pink',
    purple: 'avatar-purple',
  };
</script>

<Avatar.Root
  class={`avatar ${sizeClasses[size]} ${colors[color]}`}
  {delayMs}
  {loadingStatus}
  {onLoadingStatusChange}
  asChild={avatarAsChild}
  bind:el={avatarEl}
  {...$$restProps}
>
  <Avatar.Image src={image} asChild={avatarImageAsChild} bind:el={avatarImageEl} class="avatar-image" />
  <Avatar.Fallback asChild={avatarFallbackAsChild} bind:el={avatarFallbackEl} class="avatar-fallback">
    {#if fallback}
      {fallback}
    {:else}
      <Account />
    {/if}
  </Avatar.Fallback>
</Avatar.Root>

<style>
  /*-------------------------------------------
  / Avatar styles
  -------------------------------------------*/

  :global(.avatar) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    border-radius: var(--radius-circular);
  }

  :global(.avatar-xs) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: var(--text-sm-font-size);
    font-weight: var(--font-weight-medium);
  }

  :global(.avatar-sm) {
    width: 2rem;
    height: 2rem;
    font-size: var(--text-sm-font-size);
    font-weight: var(--font-weight-medium);
  }

  :global(.avatar-md) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: var(--text-md-font-size);
    font-weight: var(--font-weight-medium);
  }

  :global(.avatar-lg) {
    width: 3rem;
    height: 3rem;
    font-size: var(--text-lg-font-size);
    font-weight: var(--font-weight-medium);
  }

  :global(.avatar-image) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  :global(.avatar-fallback) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.avatar-icon-wrapper) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  :global(.avatar-icon-wrapper > :global(svg)) {
    width: var(--icon-xs);
    height: var(--icon-xs);
  }

  :global(.avatar-neutral) {
    background-color: var(--background-base);
    color: var(--foreground-muted);
  }

  :global(.avatar-primary) {
    background-color: var(--background-primary);
    color: var(--foreground-muted);
  }

  :global(.avatar-success) {
    background-color: var(--background-success);
    color: var(--foreground-muted);
  }

  :global(.avatar-warning) {
    background-color: var(--background-warning);
    color: var(--foreground-inverted);
  }

  :global(.avatar-critical) {
    background-color: var(--background-critical);
    color: var(--foreground-muted);
  }

  :global(.avatar-orange) {
    background-color: var(--background-orange);
    color: var(--foreground-muted);
  }

  :global(.avatar-pink) {
    background-color: var(--background-pink);
    color: var(--foreground-muted);
  }

  :global(.avatar-purple) {
    background-color: var(--background-purple);
    color: var(--foreground-muted);
  }

  :global(.avatar-xs * > svg) {
    width: var(--icon-xs);
    height: var(--icon-xs);
  }

  :global(.avatar-sm * > svg) {
    width: var(--icon-sm);
    height: var(--icon-sm);
  }

  :global(.avatar-md * > svg) {
    width: var(--icon-sm);
    height: var(--icon-sm);
  }

  :global(.avatar-lg * > svg) {
    width: var(--icon-md);
    height: var(--icon-md);
  }
</style>
