import Basic from './demo/basic.md'

# Loading Bar

To show current progress.

## Scenario

Display a loading bar on the top of a browser to show that the content is fetching and rendering.

## Usage

```jsx
import { LoadingBar } from 'tiny-ui';

LoadingBar.start();
LoadingBar.succeed();
LoadingBar.fail();
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
  </column>
</layout>

## API


