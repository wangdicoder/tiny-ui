import Basic from './demo/basic.md'
import Selectable from './demo/selectable.md'
import Icon from './demo/icon.md'

# Tree

A hierarchical list structure component.

## Scenario

Anything represented in a tree structure can use the `Tree` component.

## Usage

```jsx
import { Tree } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic />
    <Selectable />
  </column>
  <column>
    <Icon />
  </column>
</layout>

## API

### Tree

| Property            | Description                                     | Type                                                   | Default |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------ | ------- |
| data                | tree data                                       | TreeData[]                                             | -       |
| indent              | indent pixels of each tree level                | number                                                 | -       |
| checkable           | add a checkbox before tree nodes                | boolean                                                | false   |
| blockNode           | whether tree node fills the remaining space     | boolean                                                | false   |
| disabled            | whether disabled the tree                       | boolean                                                | false   |
| defaultCheckedKeys  | specifies the keys of checked nodes by default  | string[]                                               | -       |
| defaultExpandedKeys | specifies the keys of expanded nodes by default | string[]                                               | -       |
| defaultExpandAll    | whether to expand all nodes by default          | boolean                                                | false   |
| icon                | custom icon render function                     | (isExpanded: boolean) => ReactNode                     | -       |
| onCheck             | callback when a node is checked                 | (checkedKeys: string[], e: ChangeEvent) => void        | -       |
| onExpand            | callback when a node is expanded/collapsed      | (expandedKeys: string[], e: MouseEvent) => void        | -       |
| style               | style object of container                       | CSSProperties                                          | -       |
| className           | className of container                          | string                                                 | -       |

### TreeData

| Property        | Description                          | Type                                  | Default |
| --------------- | ------------------------------------ | ------------------------------------- | ------- |
| key             | unique key of the node               | string                                | -       |
| title           | title of the node                    | ReactNode                             | -       |
| disableCheckbox | whether disable checkbox of the node | boolean                               | false   |
| disabled        | whether disabled the node            | boolean                               | false   |
| icon            | custom icon render function          | (isExpanded: boolean) => ReactNode    | -       |
| children        | child tree nodes                     | TreeData[]                            | -       |
