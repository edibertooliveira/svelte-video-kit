<div align="center">
  <img src="../../.github/svk_animated.svg" alt="svk" width="200" alt="SVK logo" /> 
</div>

# Svelte Video Kit

<div align="center">
  <a href="https://npmjs.org/package/svelte-video-kit">
    <img src="https://img.shields.io/npm/v/svelte-video-kit?style=flat-square" alt="version" />
  </a>
  <a href="https://npmjs.org/package/svelte-video-kit">
    <img src="https://img.shields.io/npm/l/svelte-video-kit?style=flat-square" alt="licence" />
  </a>
  <a href="https://npmjs.org/package/svelte-video-kit">
    <img src="https://img.shields.io/badge/dependencies-0-green?style=flat-square" alt="dependencies" />
  </a>
  <a href="https://npmjs.org/package/svelte-video-kit">
    <img src="https://img.shields.io/npm/types/typescript?style=flat-square" alt="typescript" />
  </a>
</div>

This library is a powerful video playback tool that can be customized to perfectly suit modern, elegant, and even older applications.

## 💡 Requirements

The library Supports NodeJS version 18 or higher.

## 📲 Installation

```bash
yarn add svelte-video-kit
# OR
npm install svelte-video-kit
```

## 🌟 Getting Started

Simple usage looks like:

```javascript
// Step 1: Import the parts of the module you want to use
<script>
  import VideoPlayer from 'svelte-video-player';
  ...
</script>

// Step 2: Create the attributes
<script>
  ...
  const poster = 'https://www.server.com/poster.jpg';
  const source = [
    'https://www.server.com/video.webm',
    'https://www.server.com/video.mp4',
    'https://www.server.com/video.ogv',
  ];
  ...
</script>

// Step 3: Calls the component
  <VideoPlayer {poster} {source} />;
```

## 📋 Customizable attributes

| Prop name       | Type                                | Default value          | Description                                                                                                 |
| :-------------- | :---------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| width           | <code>number</code>                 | <code>1920</code>      | Real width of video for calculating aspect ratio for responsive design                                      |
| height          | <code>number</code>                 | <code>1080</code>      | Real height of video for calculating aspect ratio for responsive design                                     |
| poster          | <code>string</code>                 | <code>''</code>        | Absolute or relative URL of poster image                                                                    |
| source          | <code>string &#124; string[]</code> | <code>''</code>        | Absolute or relative URL (or array of those) of video source. Supported formats are `webm`, `mp4` and `ogg` |
| controlsHeight  | <code>number</code>                 | <code>55</code>        | Height of bottom control bar, rescaling included components                                                 |
| trackHeight     | <code>number</code>                 | <code>6</code>         | Height of playbar and volume slider tracks                                                                  |
| thumbSize       | <code>number</code>                 | <code>15</code>        | Size of playbar and volume slider thumb                                                                     |
| centerIconSize  | <code>number</code>                 | <code>60</code>        | Size of center icon                                                                                         |
| playerBgColor   | <code>string</code>                 | <code>'black'</code>   | Color of player background                                                                                  |
| color           | <code>string</code>                 | <code>'#FF3E00'</code> | Main color of control components                                                                            |
| focusColor      | <code>string</code>                 | <code>'white'</code>   | Color of focus outlines                                                                                     |
| barsBgColor     | <code>string</code>                 | <code>'white'</code>   | Background color of playbar and volume slider tracks                                                        |
| iconColor       | <code>string</code>                 | <code>'white'</code>   | Color of button icons                                                                                       |
| bufferedColor   | <code>string</code>                 | <code>'#FF9600'</code> | Color of buffered chunks                                                                                    |
| borderRadius    | <code>number</code>                 | <code>8</code>         | Rounded corner radius of the player.                                                                        |
| skipSeconds     | <code>number</code>                 | <code>5</code>         | Skipping time in seconds                                                                                    |
| chunkBars       | <code>boolean</code>                | <code>false</code>     | Display overlay with buffered and played parts of video                                                     |
| loop            | <code>boolean</code>                | <code>false</code>     | Play video in loop                                                                                          |
| controlsOnPause | <code>boolean</code>                | <code>true</code>      | Show control bar when video is paused                                                                       |
| timeDisplay     | <code>boolean</code>                | <code>false</code>     | Display current time beside playbar                                                                         |

## 📦 Packages

This repo uses [`pnpm workspaces`](https://pnpm.io/workspaces/), which TLDR means if you want to run a commands in each project then you can either `cd` to that directory and run the command, or use `pnpm -r [command]`.

For example `pnpm -r test`.

### [Just](https://github.com/angus-c/just)

[`Just-debounce-it`](https://www.npmjs.com/package/just-debounce-it)
/ [`Just-throttle`](https://www.npmjs.com/packages/just-throttle)

Part of a library of zero-dependency npm modules that do just do one thing. Guilt-free utilities for every occasion.

### [`screenfull`](https://www.npmjs.com/packages/screenfull)

Simple wrapper for cross-browser usage of the JavaScript Fullscreen API, which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have to. [screenfull](https://github.com/sindresorhus/screenfull)

## 🤝 Contributing

All contributions are welcome, ranging from people wanting to triage issues, others wanting to write documentation, to people wanting to contribute with code.

Please read and follow our [contribution guidelines](../../.github/CONTRIBUTING.md). Contributions not following these guidelines will be disregarded. The guidelines are in place to make all of our lives easier and make contribution a consistent process for everyone.

## 📜 What happened to the original [svelte-video-player?](../../.github/ANNOUNCEMENTS-2023-10-16.md)

Read the [team update](../../.github/ANNOUNCEMENTS-2023-10-16.md) (October 16th, 2023).

## 🏻 [License](./LICENSE)

```
MIT license. Copyright (c) 2023 Ediberto BO
For more information, see the LICENSE file.
```
