---
title: Video Player Installation (React)
description: Instructions to get your video player installed in your React project and on-screen.
---

!!!step title="Install NPM Package"|(slot=description)=Install `@vidstack/player` and dependencies via NPM.

```bash copy
npm i lit @vidstack/player@next
```

!!!

!!!step title="Import Components"|(slot=description)=Import player components into the `jsx` or `tsx` file where you'll be building your player.

```js copy
import { Media, Video } from '@vidstack/player/react';
```

!!!

!!!step title="Add Player Markup"|(slot=description)=Add the following player JSX boilerplate to get started.

```jsx copy
<Media>
  <Video poster="https://media-files.vidstack.io/poster.png">
    <video
      controls
      src="https://media-files.vidstack.io/720p.mp4"
      poster="https://media-files.vidstack.io/poster-seo.png"
      preload="none"
    ></video>
  </Video>
</Media>
```

!!!
