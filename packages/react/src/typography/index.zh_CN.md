import Basic from './demo/basic.md'
import Heading from './demo/heading.md'
import Text from './demo/text.md'

# Typography

基本的文字排版，包括标题、正文、列表等。

## 使用场景

展示标题或段落内容。

## 引入方式

```jsx
import { Typography } from 'tiny-design';

const { Heading, Paragraph, Text } = Typography;
```

## 代码示例

<Basic/>
<Heading/>
<Text/>

## API

### Typography

| 属性  | 说明              | 类型          | 默认值 |
| --------- | ------------------------ | ------------- | ------- |
| children  | 内容                  | ReactNode     | -       |
| style     | 容器的样式对象| CSSProperties | -       |
| className | 容器的 className   | string        | -       |

### Typography.Heading

| 属性  | 说明                      | 类型          | 默认值 |
| --------- | -------------------------------- | ------------- | ------- |
| level     | 标题级别，1 到 6      | number        | 1       |
| children  | 内容                          | ReactNode     | -       |
| style     | 容器的样式对象        | CSSProperties | -       |
| className | 容器的 className           | string        | -       |

### Typography.Paragraph

| 属性  | 说明              | 类型          | 默认值 |
| --------- | ------------------------ | ------------- | ------- |
| children  | 内容                  | ReactNode     | -       |
| style     | 容器的样式对象| CSSProperties | -       |
| className | 容器的 className   | string        | -       |

### Typography.Text

| 属性  | 说明                     | 类型          | 默认值 |
| --------- | ------------------------------- | ------------- | ------- |
| code      | 代码样式                      | boolean       | false   |
| del       | 删除线样式   | boolean       | false   |
| underline | 下划线样式                 | boolean       | false   |
| strong    | 加粗样式                      | boolean       | false   |
| italic    | 斜体样式                    | boolean       | false   |
| mark      | 标记（高亮）样式      | boolean       | false   |
| sub       | 下标样式                 | boolean       | false   |
| sup       | 上标样式               | boolean       | false   |
| children  | 内容                         | ReactNode     | -       |
| style     | 容器的样式对象       | CSSProperties | -       |
| className | 容器的 className          | string        | -       |
