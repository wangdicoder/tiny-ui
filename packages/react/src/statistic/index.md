import Basic from './demo/basic.md'
import Formatter from './demo/formatter.md'
import Style from './demo/style.md'

# Statistic

Display a statistic number with title, supporting formatted values, prefix/suffix, and custom formatting.

## Scenario

Used in dashboards and data-heavy pages to highlight key performance indicators (KPIs).

## Usage

```jsx
import { Statistic } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Formatter/>
  </Column>
  <Column>
    <Style/>
  </Column>
</Layout>

## API

| Property       | Description                                      | Type                                      | Default |
| -------------- | ------------------------------------------------ | ----------------------------------------- | ------- |
| title          | title of the statistic                           | ReactNode                                 |         |
| value          | the value to display                             | number \| string                          |         |
| precision      | number of decimal places                         | number                                    |         |
| prefix         | prefix node of value                             | ReactNode                                 |         |
| suffix         | suffix node of value                             | ReactNode                                 |         |
| groupSeparator | thousands separator                              | string                                    | ,       |
| valueStyle     | custom style for value                           | CSSProperties                             |         |
| formatter      | custom value formatter                           | (value: number \| string) => ReactNode    |         |
