import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface UploadProps extends BaseProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percent: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (data: any, file: File) => void;
  onChange?: (file: File) => void;
  children?: React.ReactElement;
}

const Upload = (props: UploadProps): JSX.Element => {
  const {
    action,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    className,
    style,
    children,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const xhrOnProgress = (evt: ProgressEvent, file: File): void => {
    if (evt.lengthComputable) {
      const percent = (evt.loaded / evt.total) * 100;
      onProgress && onProgress(percent, file);
    }
  };

  const xhrOnComplete = (evt: ProgressEvent, file: File): void => {
    onSuccess && onSuccess(evt, file);
    onChange && onChange(file);
  };

  const xhrOnError = (evt: ProgressEvent, file: File): void => {
    onError && onError(evt, file);
    onChange && onChange(file);
  };

  const postRequest = (file: File): void => {
    const formData = new FormData();
    formData.append(file.name, file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', action);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.upload.onprogress = (e): void => xhrOnProgress(e, file);
    xhr.onload = (e): void => xhrOnComplete(e, file);
    xhr.onerror = (e): void => xhrOnError(e, file);
    xhr.send(formData);
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

  const handleTriggerOnClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (fileRef.current) {
      (fileRef.current as HTMLInputElement).click();
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

  const renderInputContent = (): React.ReactNode => {
    if (React.Children.only(children) && React.isValidElement(children)) {
      const childProps = {
        ...children.props,
        onClick: handleTriggerOnClick,
      };
      return (
        <>
          {React.cloneElement(children, childProps)}
          <input
            ref={fileRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileOnChange}
          />
        </>
      );
    }
    return null;
  };

  return (
    <div className={cls} style={style}>
      {renderInputContent()}
    </div>
  );
};

Upload.displayName = 'Upload';

export default Upload;
