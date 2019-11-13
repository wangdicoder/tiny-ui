import Addon from './demo/addon.md'
import AddonButton from './demo/addon-button.md'
import Basic from './demo/basic.md'
import Clearable from './demo/clearable.md'
import PreSuffix from './demo/pre-suf-fix.md'
import Size from './demo/size.md'

# Input

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Scenario

A user input in a form field is needed.

## Usage

```js
import { Input } from 'tiny-ui';

const { Group, Addon } = Input;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Addon/>
    <AddonButton/>
  </column>
  <column>
    <PreSuffix/>
    <Size/>
    <Clearable/>
  </column>
</layout>

## API


