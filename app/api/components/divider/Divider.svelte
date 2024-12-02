<script lang="ts">
  export let orientation: 'wfs-horizontal' | 'wfs-vertical' = 'wfs-horizontal';
  export let elevation: '1' | '2' | '3' | '4' = '1';
</script>

<div class="wfs-divider {orientation} {`elevation-${elevation}`}" />

<style>
  /*-------------------------------------------
  / Divider styles
  -------------------------------------------*/

  .wfs-divider.elevation-1 {
    background-color: var(--border-muted);
  }

  .wfs-divider.elevation-2 {
    background-color: var(--border-default);
  }

  .wfs-divider.elevation-3 {
    background-color: var(--border-medium);
  }

  .wfs-divider.elevation-4 {
    background-color: var(--border-bold);
  }

  .wfs-horizontal {
    height: 1px;
    width: 100%;
  }

  .wfs-vertical {
    width: 1px;
    height: 100%;
  }
</style>
