import React from 'react';
import { BaseProps } from '../_utils/props';

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
  disabled?: boolean;
  data?: { [key: string]: string };
  headers?: { [key: string]: string };
  multiple?: boolean;
  drag?: boolean;
  tip?: React.ReactNode;
  withCredentials?: boolean;
  limit?: number;
  fileList?: UploadFile[];
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percent: number, file: UploadFile, fileList: UploadFile[]) => void;
  onSuccess?: (e: ProgressEvent, file: UploadFile, fileList: UploadFile[]) => void;
  onError?: (e: ProgressEvent, file: UploadFile, fileList: UploadFile[]) => void;
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
  onRemove?: (file: UploadFile) => void;
  onExceed?: (files: FileList, fileList: UploadFile[]) => void;
  httpRequest?: Function;
  children?: React.ReactNode;
}
