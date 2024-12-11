<script lang="ts">
  import { Tabs } from 'bits-ui';

  type $$Props = Tabs.ContentProps;

  export let value: $$Props['value'] = '';

  const { class: className, ...rest } = $$restProps;
</script>

<Tabs.Content class={`${className || ''} wfs-tabs__content`} {value} {...rest}>
  <slot />
</Tabs.Content>

<style>
  /*-------------------------------------------
  / Base styles
  -------------------------------------------*/

  :global(.wfs-tabs__content:focus-visible) {
    outline: 1px solid var(--wfs-border-primary);
    outline-offset: -1px;
  }
</style>
