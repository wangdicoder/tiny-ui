import Basic from './demo/basic.md'
import Extra from './demo/extra.md'
import Layout from './demo/layout.md'
import Method from './demo/method.md'
import ComplexLayout from './demo/complex-layout.md'
import ValidateTrigger from './demo/validate-trigger.md'
import Modal from './demo/modal.md'
import AsyncSubmit from './demo/async-submit.md'
import OtherControls from './demo/other-controls.md'

# Form

表单数据管理，包含数据收集、校验和样式。

## 使用场景

- 当你需要创建一个实例或收集信息时。
- 当你需要对字段进行特定规则的校验时。

## 引入方式

```jsx
import { Form } from 'tiny-design';

const { Item, useForm, FormInstance } = Form;
```

## 代码示例

<Basic />
<Extra />
<Layout />
<Method />
<ComplexLayout />
<ValidateTrigger />
<Modal />
<AsyncSubmit />
<OtherControls />

## API

### Form

| 属性              | 说明                                                                                          | 类型                                              | 默认值        |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------- |
| form              | 经 `Form.useForm()` 创建的表单控制实例。未提供时会自动创建                                     | `FormInstance`                                    | -             |
| initialValues     | 表单初始化或重置时的默认值                                                                     | object                                            | false         |
| labelCol          | 标签布局，同 `<Col>` 组件                                                                      | number &#124; \{ span: number, offset: number \}    | 8             |
| wrapperCol        | 输入控件的布局，同 `labelCol`                                                                  | number &#124; \{ span: number, offset: number \}    | 16            |
| validateTrigger   | 字段校验触发时机                                                                               | `onChange` &#124; `onBlur` &#124; `onSubmit`      | `onChange`    |
| layout            | 表单布局方式                                                                                   | `horizontal` &#124; `vertical` &#124; `inline`    | `horizontal`  |
| onFinish          | 提交表单且数据校验成功后的回调                                                                 | (values) => void                                  | -             |
| onFinishFailed    | 提交表单且数据校验失败后的回调                                                                 | (values, errors) => void                          | -             |

### Form.Item

表单字段组件，用于数据双向绑定、校验和布局。

| 属性              | 说明                                                              | 类型                                              | 默认值    |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------- | --------- |
| name              | 字段名称                                                          | string                                            | -         |
| required          | 显示必填样式。会根据校验规则自动生成                               | boolean                                           | -         |
| colon             | 是否在标签文本后显示 `:`                                           | boolean                                           | true      |
| label             | 标签文本                                                          | string                                            | -         |
| rules             | 字段校验规则                                                      | `Rule`[]                                          | -         |
| helper            | 提示信息                                                          | ReactNode                                         | -         |
| notice            | 类似 `help`，但更醒目                                              | ReactNode                                         | -         |
| valuePropName     | 子节点的值属性名。例如 `Switch` 的属性为 'checked'                 | string                                            | 'value'   |
| valueGetter       | 指定如何从事件或其他 `onChange` 参数中获取值                       | (..args: any[]) => any                            | -         |
| labelCol          | 标签布局                                                          | number &#124; \{ span: number, offset: number \}    | -         |
| wrapperCol        | 控件布局                                                          | number &#124; \{ span: number, offset: number \}    | -         |

### FormInstance

| 方法              | 说明                                      | 类型                                      |
| ----------------- | ------------------------------------------------- | ----------------------------------------- |
| getFieldValues    | 获取一组字段名对应的值                    | () => \{ [name: string]: any \}             |
| getFieldValue     | 获取指定字段名对应的值                    | (name: string) => any                     |
| setFieldValues    | 设置一组字段名对应的值                    | (\{ [name: string]: any \}) => void         |
| setFieldValue     | 设置指定字段名对应的值                    | (name: string, value: any) => void        |
| getFieldErrors    | 获取一组字段名对应的错误信息              | () => \{ [name: string]: string[] \}        |
| getFieldError     | 获取指定字段名对应的错误信息              | (name: string) => string[]                |
| setFieldError     | 设置指定字段名对应的错误信息              | (name: string, errors: string[]) => void  |
| resetFields       | 重置字段为 initialValues                  | () => void                                |
| validateFields    | 校验所有字段                              | (name: string) => void                    |
| validateField     | 校验指定字段                              | () => void                                |

### Rule

| 属性              | 说明                                              | 类型                                          |
| ----------------- | ------------------------------------------------- | --------------------------------------------- |
| type              | 指定类型                                          | `string` &#124; `number` &#124; `boolean`     |
| message           | 错误提示信息。未提供时将通过模板自动生成           | string                                        |
| max               | 需指定类型：字符串、数字、数组的最大长度           | number                                        |
| min               | 需指定类型：字符串、数字、数组的最小长度           | number                                        |
| required          | 是否为必填字段                                    | boolean                                       |
| enum              | 枚举值匹配                                        | any[]                                         |
| len               | 字符串、数字、数组的长度                           | number                                        |
| pattern           | 正则表达式                                        | RegExp                                        |
| transform         | 校验前对值进行转换                                | (value) => any                                |
| validator         | 自定义校验规则                                    | (value) => boolean &#124; `Promise<boolean>`  |
| whitespace        | 仅包含空格时是否校验失败                           | boolean                                       |
