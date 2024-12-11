<script lang="ts">
  import { Tooltip } from 'bits-ui';

  type $$Props = Tooltip.Props;

  export let closeDelay: $$Props['closeDelay'] = 0;
</script>

<Tooltip.Root {closeDelay} {...$$restProps}>
  <slot />
</Tooltip.Root>
