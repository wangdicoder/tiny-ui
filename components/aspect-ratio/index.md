import Video from './demo/video.md'
import Image from './demo/image.md'
import Map from './demo/map.md'

# Aspect Radio

An element describes the proportional relationship between its width and its height.

## Scenario

Used to embed responsive images, videos and maps, etc. It uses a very common [padding hack](https://css-tricks.com/aspect-ratio-boxes/) to achieve this.

## Usage

```jsx
import { AspectRatio } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Video/>
    <Map/>
  </column>
  <column>
    <Image/>
  </column>
</layout>

## API

