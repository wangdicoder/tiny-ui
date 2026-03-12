import Basic from './demo/basic.md'
import Search from './demo/search.md'

# Transfer

双栏穿梭选择框。

## 使用场景

- 本质上是一个选择控件，可用于多项选择。
- Transfer 可以展示更多的项目信息，且占用更多的空间。

## 引入方式

```jsx
import { Transfer } from 'tiny-design';
```

## 代码示例

<Basic />
<Search />

## API

| 属性          | 说明                                                              | 类型                                                                  | 默认值        |
| ------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------- |
| dataSource    | 数据源                                                            | TransferItem[]                                                        | -             |
| value	        | 显示在右侧列表中的元素键值集合                                    | string[]                                                              | -             |
| defaultValue	| 显示在右侧列表中的元素默认键值集合                                | string[]                                                              | []            |
| disabled	    | 是否禁用穿梭框                                                    | boolean                                                               | false         |
| showSearch	| 是否可搜索                                                        | boolean                                                               | false         |
| titles	    | 左右面板的标题                                                    | [string, string]                                                      | -             |
| placeholder	| 两个面板的搜索占位符                                              | string                                                                | 'search'      |
| placeholders	| 左右面板的搜索占位符                                              | [string, string]                                                      | -             |
| buttonTexts	| 自定义按钮文案                                                    | [string, string]                                                      | -             |
| onChange	    | 右侧列表数据项变化时的回调                                        | (targetKeys: string[], direction: string, moveKeys: string[]) => void | -             |
| renderItem	| 数据项的自定义渲染函数                                            | (item: TransferItem) => ReactNode                                     | -             |
| filterOption  | 搜索时用于判断是否应在搜索结果中显示的函数                        | (input: string, item: TransferItem) => boolean                        | -             |

### TransferItem

```jsx
type TransferItem = {
  key: string;
  label: string;
  disabled: boolean;
};
```
