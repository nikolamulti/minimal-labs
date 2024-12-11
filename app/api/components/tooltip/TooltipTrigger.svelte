<script lang="ts">
  import { Tooltip } from 'bits-ui';

  type $$Props = Tooltip.TriggerProps;
  type $$Events = Tooltip.TriggerEvents;
</script>

<Tooltip.Trigger on:blur on:focus on:keydown on:pointerenter on:pointerleave let:builder {...$$restProps}>
  <slot {builder} />
</Tooltip.Trigger>
