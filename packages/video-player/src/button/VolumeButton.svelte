<ButtonDefault on:pointerup>
  <VolumeIcon {muted} />
</ButtonDefault>

<script>
  import ButtonDefault from '../core/DefaultButton.svelte';
  import VolumeIcon from '../icons/VolumeIcon.svelte';

  export let muted;
</script>
