<svelte:window on:scroll={onScroll} />

<script>
  import { onDestroy } from 'svelte';
  import debounce from 'just-debounce-it';

  export let isScrolling = false;

  let timeout;

  function onScroll() {
    isScrolling = true;
    setScrollEndTimeout();
  }

  const setScrollEndTimeout = debounce(
    () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    },
    100,
    true
  );

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>
