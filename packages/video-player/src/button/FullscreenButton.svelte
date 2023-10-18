<ButtonDefault on:pointerup>
  <FullscreenIcon {isFullscreen} />
</ButtonDefault>

<script>
  import ButtonDefault from '../core/DefaultButton.svelte';
  import FullscreenIcon from '../icons/FullscreenIcon.svelte';

  export let isFullscreen;
</script>
