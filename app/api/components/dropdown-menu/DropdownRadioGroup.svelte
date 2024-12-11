<script lang="ts">
  import { DropdownMenu } from 'bits-ui';

  type $$Props = DropdownMenu.RadioGroupProps;

  export let value: $$Props['value'] = undefined;
</script>

<DropdownMenu.RadioGroup bind:value {...$$restProps}>
  <slot />
</DropdownMenu.RadioGroup>
