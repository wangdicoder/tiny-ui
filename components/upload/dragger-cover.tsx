import React, { useState } from 'react';
import classNames from 'classnames';

export interface DraggerCoverProps {
  onFile: (files: FileList) => void;
  prefixCls?: string;
  children?: React.ReactNode;
}

const DraggerCover = (props: DraggerCoverProps): JSX.Element => {
  const { onFile, prefixCls, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const cls = classNames(`${prefixCls}__dragger-cover`, {
    [`${prefixCls}__dragger-cover_dragover`]: dragOver,
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, isOver: boolean): void => {
    e.preventDefault();
    setDragOver(isOver);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  return (
    <div
      className={cls}
      onDragOver={(e): void => handleDragOver(e, true)}
      onDragLeave={(e): void => handleDragOver(e, false)}
      onDrop={handleDrop}>
      {children}
    </div>
  );
};

DraggerCover.displayName = 'DraggerCover';

export default DraggerCover;
