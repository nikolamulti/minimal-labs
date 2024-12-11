<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<SVGSVGElement> & {
    size?: number | undefined;
  };

  export let size: $$Props['size'] = 24;

  const { class: className, ...rest } = $$restProps;
</script>

<svg width={size} height={size} class={`${className || ''} wfs-spinner`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path
    opacity=".2"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.99998 13.3333c2.94552 0 5.33332-2.3878 5.33332-5.33332 0-2.94552-2.3878-5.33333-5.33332-5.33333-2.94552 0-5.33333 2.38781-5.33333 5.33333s2.38781 5.33332 5.33333 5.33332Zm0 1.3333c3.68192 0 6.66662-2.9847 6.66662-6.66662 0-3.6819-2.9847-6.66667-6.66662-6.66667-3.6819 0-6.66667 2.98477-6.66667 6.66667 0 3.68192 2.98477 6.66662 6.66667 6.66662Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.65988 7.99998c0-1.41628.56262-2.77456 1.56408-3.77602C5.22542 3.2225 6.5837 2.65988 7.99998 2.65988V1.33331c-.45123 0-.89774.04575-1.33333.13467-1.27126.25951-2.44954.88678-3.38072 1.81795-.93117.93118-1.55844 2.10946-1.81795 3.38072-.08892.43559-.13467.8821-.13467 1.33333h1.32657Z"
    fill="currentColor"
  />
</svg>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  :global(.wfs-spinner) {
    animation: rotate 0.8s linear infinite;
  }
</style>
