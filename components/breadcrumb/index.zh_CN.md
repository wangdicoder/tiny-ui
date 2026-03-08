import Basic from './demo/basic.md'
import Icon from './demo/icon.md'
import Separator from './demo/separator.md'

# Breadcrumb

面包屑导航显示当前页面在层级结构中的位置。它允许用户返回到层级中更高的级别。

## 使用场景

- 当系统的层级结构超过两层时。
- 当需要告知用户当前所在位置时。
- 当用户可能需要导航回上一层级时。
- 当应用具有多层架构时。

## 引入方式

```js
import { Breadcrumb } from 'tiny-ui';

const { Item } = Breadcrumb;
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Separator/>
  </column>
  <column>
    <Icon/>
  </column>
</layout>

## API

| 属性          | 说明                                               | 类型              | 默认值       |
| ----------------- | --------------------------------------------------------- | ----------------- | ------------- |
| separator         | 自定义分隔符                                      | ReactNode         | '/'           |
