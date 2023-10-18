{#if isClient}
  <VideoPlayerClient
    controlsHeight="{controlsHeight}px"
    thumbSize="{thumbSize}px"
    trackHeight="{trackHeight}px"
    centerIconSize="{centerIconSize}px"
    borderRadius="{borderRadius}px"
    {width}
    {height}
    {poster}
    {source}
    {playerBgColor}
    {color}
    {focusColor}
    {barsBgColor}
    {iconColor}
    {bufferedColor}
    {chunkBars}
    {loop}
    {skipSeconds}
    {aspectRatio}
    {controlsOnPause}
    {timeDisplay}
  />
{:else}
  <VideoPlayerServer {playerBgColor} {borderRadius} {aspectRatio} />
{/if}

<script lang="ts">
  import VideoPlayerClient from './VideoPlayerClient.svelte';
  import VideoPlayerServer from './core/VideoPlayerServer.svelte';

  let isClient = typeof window !== 'undefined' ? true : false;

  //-------------------------------------------------------------------------------------------------------------------
  // PROPS
  //-------------------------------------------------------------------------------------------------------------------

  export let width = 1920;
  export let height = 1080;
  export let poster = '';
  export let source: string | string[];
  export let controlsHeight = 30;
  export let trackHeight = 2;
  export let thumbSize = 15;
  export let centerIconSize = 60;
  export let playerBgColor = 'black';
  export let color = '#FF3E00';
  export let focusColor = 'white';
  export let barsBgColor = 'white';
  export let iconColor = 'white';
  export let bufferedColor = '#FF9600';
  export let chunkBars = false;
  export let borderRadius = 8;
  export let loop = false;
  export let skipSeconds = 5;
  export let controlsOnPause = true;
  export let timeDisplay = false;

  $: _width = width;
  $: _height = height;
  $: aspectRatio = _height / _width;
</script>
