import Basic from './demo/basic.md'
import UploadList from './demo/upload-list.md'
import Drag from './demo/drag.md'

# Upload

Upload files by clicking or drag-and-drop

## Scenario

- When you need to upload one or more files.
- When you need to show the process of uploading.
- When you need to upload files by dragging and dropping.

## Usage

```jsx
import { Upload } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <UploadList/>
  </column>
  <column>
    <Drag/>
  </column>
</layout>

## API

| Property          | Description                                       | Type                          | Default   |
| ----------------- | ------------------------------------------------- | ----------------------------- | --------- |
| action            | request URL                                       | string                        | -         |
| accept            | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)        | string    | -     |
| method            | http request method                               | string                        | `POST`    |
| name              | key name for uploaded file	                    | string                        | -         |
| disabled          | disabled state of button                          | boolean                       | false     |
| data              | additions options of request                      | object                        | -         |
| headers           | request headers                                   | object                        | -         |
| multiple          | whether uploading multiple files is permitted     | boolean                       | -         |
| drag              | whether to activate drag and drop mode            | boolean                       | -         |
| tip               | a tip content displaying under the trigger        | React.ReactNode               | -         |
| withCredentials   | whether cookies are sent                          | boolean                       | -         |
| fileList          | uploaded files                                    | object[]                      | -         |
| defaultFileList   | default uploaded files                            | object[]                      | -         |
| limit             | maximum number of uploads allowed	                | number                        | -         |
| beforeUpload      | hook function before uploading with the file to be uploaded as its parameter. If false or a Promise is returned, uploading will be aborted    | (file: File) => void  | -   |
| onProgress        | hook function when some progress occurs           | (percent: number) => void     | -         |
| onSuccess         | hook function when uploaded successfully          | (file, fileList) => void      | -         |
| onError           | hook function when some errors occurs             | (file, fileList) => void      | -         |
| onChange          | hook function when file status change             | (file, fileList) => void      | -         |
| onRemove          | hook function when files are removed              | (file) => void                | -         |
| onExceed          | hook function when limit is exceeded              | (files, fileList) => void     | -         |
| httpRequest       | override default xhr behavior                     | Function                      | ajax      |
| style	            | style object of container	object                  | CSSProperties                 | -         |
| className	        | className of container                            | string                        | -         |
