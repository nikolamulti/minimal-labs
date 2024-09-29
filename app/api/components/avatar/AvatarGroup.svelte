<script lang="ts">
</script>

<div class="wfs-avatar-group">
  <slot />
</div>

<style>
  /*-------------------------------------------
  / Avatar group styles
  -------------------------------------------*/

  .wfs-avatar-group :global(:not(:first-child)) {
    margin-left: -0.5rem;
  }

  :global(.wfs-avatar-group > :not(:first-child) [data-avatar-fallback]) {
    padding-left: 0.5rem;
  }

  .wfs-avatar-group :global(> *) {
    border: 2px solid var(--border-base);
    box-sizing: content-box;
  }
</style>
