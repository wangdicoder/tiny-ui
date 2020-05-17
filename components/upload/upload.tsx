import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import ajax from './ajax';
import UploadList from './upload-list';
import DraggerCover from './dragger-cover';

export type UploadFileStatus = 'uploading' | 'done' | 'error' | 'ready';

export interface UploadFile {
  uid: string;
  name: string;
  status: UploadFileStatus;
  percent?: number;
  url?: string;
}

export interface UploadProps extends BaseProps {
  action: string;
  accept?: string;
  method?: string;
  name?: string;
  limit?: number;
  disabled?: boolean;
  data?: { [key: string]: string };
  headers?: { [key: string]: string };
  multiple?: boolean;
  drag?: boolean;
  tip?: React.ReactNode;
  withCredentials?: boolean;
  fileList?: UploadFile[];
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percent: number, file: UploadFile, fileList: UploadFile[]) => void;
  onSuccess?: (e: ProgressEvent, file: UploadFile, fileList: UploadFile[]) => void;
  onError?: (e: ProgressEvent, file: UploadFile, fileList: UploadFile[]) => void;
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
  onRemove?: (file: UploadFile) => void;
  httpRequest?: Function;
  children?: React.ReactNode;
}

const Upload = (props: UploadProps): JSX.Element => {
  const {
    defaultFileList = [],
    httpRequest = ajax,
    disabled = false,
    headers,
    withCredentials,
    accept,
    action,
    multiple,
    name,
    data,
    drag,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    tip,
    className,
    style,
    children,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
  });
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(
    'fileList' in props && Array.isArray(props.fileList) ? props.fileList : defaultFileList
  );

  const updateFileList = (updateFile: UploadFile, targetObj: Partial<UploadFile>): void => {
    setFileList((prevState) =>
      prevState.map((file: UploadFile) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...targetObj };
        } else {
          return file;
        }
      })
    );
  };

  const xhrOnProgress = (percent: number, uploadFile: UploadFile): void => {
    const updateObj: Partial<UploadFile> = { percent, status: 'uploading' };
    updateFileList(uploadFile, updateObj);
    onProgress && onProgress(percent, { ...uploadFile, ...updateObj }, fileList);
  };

  const xhrOnComplete = (e: ProgressEvent, uploadFile: UploadFile): void => {
    const updateObj: Partial<UploadFile> = { status: 'done' };
    updateFileList(uploadFile, updateObj);
    const updatedUploadFile = { ...uploadFile, ...updateObj };
    onSuccess && onSuccess(e, updatedUploadFile, fileList);
    onChange && onChange(updatedUploadFile, fileList);
  };

  const xhrOnError = (e: ProgressEvent, uploadFile: UploadFile): void => {
    const updateObj: Partial<UploadFile> = { status: 'error' };
    updateFileList(uploadFile, { status: 'error' });
    const updatedUploadFile = { ...uploadFile, ...updateObj };
    onError && onError(e, updatedUploadFile, fileList);
    onChange && onChange(updatedUploadFile, fileList);
  };

  const postRequest = (file: File): void => {
    // Create a upload file instance
    const uploadFile: UploadFile = {
      uid: 'file-' + Date.now(),
      name: file.name,
      status: 'ready',
      percent: 0,
    };
    setFileList((prevState) => [uploadFile, ...prevState]);

    httpRequest({
      headers,
      withCredentials,
      file,
      data,
      filename: name || file.name,
      action,
      onProgress: (percent: number) => xhrOnProgress(percent, uploadFile),
      onSuccess: (e: ProgressEvent) => xhrOnComplete(e, uploadFile),
      onError: (e: ProgressEvent) => xhrOnError(e, uploadFile),
    });
  };

  const uploadFiles = (files: FileList): void => {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        postRequest(file);
      } else {
        const res = beforeUpload(file);
        if (res && res instanceof Promise) {
          res.then((processedFile: File) => postRequest(processedFile));
        } else if (res !== false) {
          postRequest(file);
        }
      }
    });
  };

  const handleTriggerOnClick = (): void => {
    if (!disabled) {
      if (fileRef.current) {
        (fileRef.current as HTMLInputElement).click();
      }
    }
  };

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.currentTarget.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileRef.current) {
      (fileRef.current as HTMLInputElement).value = '';
    }
  };

  const handleOnRemove = (uploadFile: UploadFile): void => {
    setFileList((prevState) => prevState.filter((file) => file.uid !== uploadFile.uid));
    onRemove && onRemove(uploadFile);
  };

  return (
    <>
      <div className={cls} style={style} onClick={handleTriggerOnClick}>
        {drag ? (
          <DraggerCover prefixCls={prefixCls} onFile={uploadFiles} disabled={disabled}>
            {children}
          </DraggerCover>
        ) : (
          children
        )}
        {tip && <div className={`${prefixCls}__tip`}>{tip}</div>}
        <input
          ref={fileRef}
          accept={accept}
          multiple={multiple}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileOnChange}
        />
      </div>
      <UploadList prefixCls={prefixCls} fileList={fileList} onRemove={handleOnRemove} />
    </>
  );
};

Upload.displayName = 'Upload';

export default Upload;
