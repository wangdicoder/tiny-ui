import React from 'react';
import { SizeType } from '../_utils/props';

type Props = {
  className: string;
  size: SizeType;
};

const Indicator = (props: Props): React.ReactElement => {
  const { size, className } = props;
  return (
    <div className={`${className} ${className}_${size}`}>
      <span className={`${className}-dot`} />
      <span className={`${className}-dot`} />
      <span className={`${className}-dot`} />
      <span className={`${className}-dot`} />
    </div>
  );
};

export default Indicator;
