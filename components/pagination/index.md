import Basic from './demo/basic.md'
import More from './demo/more.md'
import Size from './demo/size.md'
import Disabled from './demo/disabled.md'
import Align from './demo/align.md'
import Controlled from './demo/controlled.md'

# Pagination

It is used to separate long sets of data so that it is easier for a user to consume information. 

## Scenario

- When it will take a long time to load/render all items.

- If you want to browse the data by navigating through pages.

## Usage

```js
import { Pagination } from 'tiny-ui';
```

## Examples

<Basic />
<More />
<Size />
<Disabled />
<Align />
<Controlled />

## API

| Property          | Description                               | Type                                                          | Default   |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| current           | current page number                       | number                                                        | -         |
| total             | total number of data items                | number                                                        | -         |
| defaultCurrent    | default initial page number               | number                                                        | 1         |
| disabled          | disable pagination                        | boolean                                                       | false     |
| pageSize          | number of data items per page             | number                                                        | 10        |
| size              | pagination size                           | enum: `sm` &#124; `md`                                        | -         |
| defaultPageSize   | default number of data items per page     | enum: `sm` &#124; `md`                                        | `md`      |
| align             | align the pagination                      | enum: `left` &#124; `center` &#124; `right`                   | `center`  |
| onChange          | trigger when the page number is changed   | (current: number, total: number, pageSize: number) => void    | -         |
