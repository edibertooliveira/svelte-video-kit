<ButtonDefault on:pointerup>
  <PlayPauseIcon {paused} />
</ButtonDefault>

<script>
  import ButtonDefault from '../core/DefaultButton.svelte';
  import PlayPauseIcon from '../icons/PlayPauseIcon.svelte';

  export let paused;
</script>
