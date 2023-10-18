<script>
  import { onDestroy } from 'svelte';
  import screenfull from 'screenfull';

  export let element;
  export let isFullscreen;
  export let isFullscreenEnabled;

  isFullscreenEnabled = screenfull.isEnabled;

  if (isFullscreenEnabled) screenfull.on('change', onChange);

  function onChange(e) {
    if (element == e.target) isFullscreen = screenfull.isFullscreen;
  }

  $: {
    if (isFullscreenEnabled)
      isFullscreen ? screenfull.request(element) : screenfull.exit();
  }

  onDestroy(() => {
    screenfull.off('change', onChange);
  });
</script>
