import React from 'react';

type ArrowDownProps = {
  size?: number;
};
export const ArrowDown = (props: ArrowDownProps): React.ReactElement => {
  const { size = 50 } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentcolor"
        d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
      />
    </svg>
  );
};
