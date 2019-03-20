import * as React from 'react';

export type FlipItemProps = {
  className?: string,
  children?: React.ReactNode,
  style?: React.CSSProperties,
};

const FlipItem = (props: FlipItemProps) => {
  const {className, children, style} = props;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default FlipItem;
