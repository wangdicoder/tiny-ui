import Success from './demo/success.md'
import Loading from './demo/loading.md'
import Error from './demo/error.md'
import Warning from './demo/warning.md'
import Info from './demo/info.md'
import Icon from './demo/icon.md'

# Result

用于反馈一系列操作任务的处理结果。

## 使用场景

当需要向用户告知重要操作的处理结果，且反馈内容较为复杂时使用。

## 代码示例

<Success/>
<Loading/>
<Error/>
<Warning/>
<Info/>
<Icon/>

## API

| 属性      | 说明                                          | 类型                                                                              | 默认值    |
| --------- | --------------------------------------------- | --------------------------------------------------------------------------------- | --------- |
| title     | 标题                                          | ReactNode                                                                         | -         |
| subtitle  | 副标题                                        | ReactNode                                                                         | -         |
| status    | 显示不同图标以表示结果状态                    | enum: `success` &#124; `error` &#124; `info` &#124; `warning` &#124; `loading`    | -         |
| icon      | 自定义图标                                    | ReactNode                                                                         | -         |
| extra     | 操作区域                                      | ReactNode                                                                         | -         |
| style	    | 容器的样式对象                                | CSSProperties                                                                     | -         |
| className	| 容器的类名                                    | string                                                                            | -         |
