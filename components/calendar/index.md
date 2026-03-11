import Basic from './demo/basic.md'

# Calendar

A calendar component for displaying and selecting dates.

## Scenario

Display a full calendar view with date selection. Useful for scheduling and date-related features.

## Usage

```jsx
import { Calendar } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
  </Column>
</Layout>

## API

| Property        | Description                              | Type                                         | Default |
| --------------- | ---------------------------------------- | -------------------------------------------- | ------- |
| value           | selected date (controlled)               | Date                                         |         |
| defaultValue    | default selected date                    | Date                                         | today   |
| mode            | display mode                             | 'month' \| 'year'                            | month   |
| fullscreen      | full-size or card mode                   | boolean                                      | true    |
| disabledDate    | disable specific dates                   | (date: Date) => boolean                      |         |
| onChange        | callback when date is selected           | (date: Date) => void                         |         |
| onSelect        | callback when a date cell is clicked     | (date: Date) => void                         |         |
| onPanelChange   | callback when panel changes              | (date: Date, mode: string) => void           |         |
| dateCellRender  | custom render for date cell content      | (date: Date) => ReactNode                    |         |
| monthCellRender | custom render for month cell content     | (date: Date) => ReactNode                    |         |
| headerRender    | custom header render                     | (config) => ReactNode                        |         |
