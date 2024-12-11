<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const intervalId = setInterval(() => {
      const body = document.body;
      const background1 = getComputedStyle(body).getPropertyValue('--background1').trim();

      if (background1 !== '') {
        clearInterval(intervalId);
        const currentTheme = document.getElementById('currentTheme');
        if (currentTheme) {
          const backgroundColor = getComputedStyle(currentTheme).getPropertyValue('background-color');
          if (backgroundColor === 'rgb(30, 30, 30)') {
            body.setAttribute('data-theme', 'darker');
          } else if (backgroundColor === 'rgb(41, 41, 41)') {
            body.setAttribute('data-theme', 'default');
          } else if (backgroundColor === 'rgb(53, 53, 53)') {
            body.setAttribute('data-theme', 'brighter');
          }
        }
      }
    }, 10);
  });
</script>

<div id="currentTheme" />
<slot />

<style>
  #currentTheme {
    display: none;
    background-color: var(--background1);
  }
</style>
