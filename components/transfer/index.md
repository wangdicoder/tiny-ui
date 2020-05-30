import Basic from './demo/basic.md'
import Search from './demo/search.md'

# Transfer

Double column transfer choice box.

## When To Use

- It is a select control essentially which can be use for selecting multiple items.
- Transfer can display more information for items and take up more space.

## Usage

```jsx
import { Transfer } from 'tiny-ui';
```

## Examples

<Basic />
<Search />

## API

| Property      | Description                                                               | Type                                                                  | Default       |
| ------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------- |
| dataSource    | used for setting the source data                                          | TransferItem[]                                                        | -             |
| value	        | a set of keys of elements that are listed on the right column             | string[]                                                              | -             |
| defaultValue	| a default set of keys of elements that are listed on the right column     | string[]                                                              | []            |
| disabled	    | whether disabled transfer                                                 | boolean                                                               | false         |
| showSearch	| whether `Transfer` is filterable                                          | boolean                                                               | false         |
| titles	    | titles for left and right panel                                           | [string, string]                                                      | -             |
| placeholder	| placeholder for both panels                                               | string                                                                | 'search'      |
| placeholders	| placeholders for left and right panel                                     | [string, string]                                                      | -             |
| buttonTexts	| custom button texts                                                       | [string, string]                                                      | -             |
| onChange	    | triggers when data items change in the right list                         | (targetKeys: string[], direction: string, moveKeys: string[]) => void | -             |
| renderItem	| custom render function for data items                                     | (item: TransferItem) => ReactNode                                     | -             |
| filterOption  | a function to determine whether an item should show in search result list | (input: string, item: TransferItem) => boolean                        | -             |

### TransferItem

```jsx
type TransferItem = {
  key: string;
  label: string;
  disabled: boolean;
};
```
