<svelte:window on:pointermove={onActivity} on:keydown={onActivity} />

<script>
  import { onDestroy } from 'svelte';
  import debounce from 'just-debounce-it';

  export let isIdle = false;

  let timeout;

  function onActivity() {
    isIdle = false;
    setIdleTimeout();
  }

  const setIdleTimeout = debounce(
    () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isIdle = true;
      }, 2000);
    },
    250,
    true
  );

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>
