import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface EmptyProps extends BaseProps {
  image?: string | ReactNode;
  imageStyle?: CSSProperties;
  description?: string;
  descStyle?: CSSProperties;
  children?: React.ReactNode;
}

const Empty = ({ prefixCls = 'ty-empty', description = 'No Data', ...restProps }: EmptyProps) => {
  const { image, imageStyle, descStyle, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  const renderImage = (): ReactNode => {
    if (React.isValidElement(image)) {
      return image;
    } else if (typeof image === 'string') {
      return <img src={image} alt="empty" style={imageStyle} className={`${prefixCls}__image`} />;
    } else {
      return (
        <svg width="48px" height="36px" viewBox="0 0 24 18" version="1.1">
          <g fill="#D9D9D9">
            {/* tslint:disable-next-line:max-line-length */}
            <path d="M23.274,8.834 L20.532,1.636 C20.526,1.621 20.519,1.606 20.511,1.592 C20.287,1.058 19.778,0.717 19.198,0.717 L4.802,0.717 C4.227,0.717 3.718,1.055 3.491,1.583 C3.481,1.6 3.473,1.618 3.466,1.637 L0.725,8.835 C0.719,8.851 0.714,8.867 0.71,8.883 C0.658,9.036 0.631,9.191 0.631,9.344 L0.631,15.857 C0.631,16.645 1.273,17.285 2.06,17.285 L21.94,17.285 C22.727,17.285 23.369,16.644 23.369,15.857 L23.369,9.344 C23.369,9.177 23.338,9.008 23.274,8.834 Z M22.568,15.855 C22.568,16.202 22.287,16.483 21.94,16.483 L2.06,16.483 C1.713,16.483 1.432,16.201 1.432,15.855 L1.432,9.342 C1.432,9.269 1.446,9.196 1.475,9.117 C1.48,9.104 1.484,9.092 1.488,9.079 L4.197,1.966 C4.204,1.952 4.211,1.937 4.217,1.922 C4.312,1.675 4.542,1.515 4.803,1.515 L19.199,1.515 C19.46,1.515 19.689,1.674 19.783,1.921 C19.788,1.934 19.794,1.946 19.8,1.959 L22.527,9.118 C22.556,9.197 22.57,9.27 22.57,9.343 L22.57,15.855 L22.568,15.855 Z" />
            {/* tslint:disable-next-line:max-line-length */}
            <path d="M18.864,3.03 C18.804,2.875 18.656,2.773 18.49,2.773 L5.511,2.773 C5.345,2.773 5.197,2.876 5.137,3.03 L3.179,8.172 C3.132,8.295 3.149,8.433 3.224,8.542 C3.298,8.65 3.421,8.715 3.553,8.715 L6.86,8.715 C7.206,8.715 7.487,8.997 7.487,9.343 L7.487,10.371 C7.487,10.592 7.667,10.771 7.887,10.771 L16.114,10.771 C16.335,10.771 16.514,10.592 16.514,10.371 L16.514,9.343 C16.514,8.996 16.795,8.715 17.142,8.715 L20.449,8.715 C20.581,8.715 20.704,8.651 20.778,8.542 C20.853,8.434 20.87,8.295 20.823,8.172 L18.864,3.03 Z M17.142,7.915 C16.355,7.915 15.713,8.556 15.713,9.343 L15.713,9.971 L8.287,9.971 L8.287,9.343 C8.287,8.555 7.646,7.915 6.859,7.915 L4.133,7.915 L5.786,3.573 L18.215,3.573 L19.868,7.915 L17.142,7.915 Z" />
          </g>
        </svg>
      );
    }
  };

  return (
    <div className={cls} style={style}>
      {renderImage()}
      <p className={`${prefixCls}__desc`} style={descStyle}>
        {description}
      </p>
      {children}
    </div>
  );
};

export default Empty;
