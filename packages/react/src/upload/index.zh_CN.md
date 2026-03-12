import Basic from './demo/basic.md'
import UploadList from './demo/upload-list.md'
import Drag from './demo/drag.md'

# Upload

通过点击或拖拽上传文件。

## 使用场景

- 当需要上传一个或多个文件时。
- 当需要展示上传进度时。
- 当需要通过拖拽方式上传文件时。

## 引入方式

```jsx
import { Upload } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <UploadList/>
  </Column>
  <Column>
    <Drag/>
  </Column>
</Layout>

## API

| 属性              | 说明                                                      | 类型                          | 默认值    |
| ----------------- | ------------------------------------------------- | ----------------------------- | --------- |
| action            | 上传请求的 URL                                    | string                        | -         |
| accept            | 接受的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)        | string    | -     |
| method            | HTTP 请求方法                                     | string                        | `POST`    |
| name              | 上传文件的字段名                                  | string                        | -         |
| disabled          | 按钮的禁用状态                                    | boolean                       | false     |
| data              | 请求的附加参数                                    | object                        | -         |
| headers           | 请求头                                            | object                        | -         |
| multiple          | 是否允许上传多个文件                              | boolean                       | -         |
| drag              | 是否启用拖拽上传模式                              | boolean                       | -         |
| tip               | 触发器下方显示的提示内容                          | React.ReactNode               | -         |
| withCredentials   | 是否发送 cookie                                   | boolean                       | -         |
| fileList          | 已上传的文件列表                                  | object[]                      | -         |
| defaultFileList   | 默认已上传的文件列表                              | object[]                      | -         |
| limit             | 允许上传的最大数量                                | number                        | -         |
| beforeUpload      | 上传前的钩子函数，参数为待上传文件。返回 false 或 Promise 时将中止上传    | (file: File) => void  | -   |
| onProgress        | 上传进度回调钩子                                  | (percent: number) => void     | -         |
| onSuccess         | 上传成功时的钩子                                  | (file, fileList) => void      | -         |
| onError           | 上传出错时的钩子                                  | (file, fileList) => void      | -         |
| onChange          | 文件状态变化时的钩子                              | (file, fileList) => void      | -         |
| onRemove          | 文件被移除时的钩子                                | (file) => void                | -         |
| onExceed          | 超出数量限制时的钩子                              | (files, fileList) => void     | -         |
| httpRequest       | 覆盖默认的 xhr 行为                               | Function                      | ajax      |
| style	            | 容器的样式对象                                    | CSSProperties                 | -         |
| className	        | 容器的类名                                        | string                        | -         |
