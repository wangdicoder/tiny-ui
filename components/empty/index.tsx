import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { EmptyProps } from './types';

const Empty = (props: EmptyProps): React.ReactElement => {
  const {
    description = 'No Data',
    image,
    imageStyle,
    descStyle,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('empty', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  const renderImage = (): ReactNode => {
    if (React.isValidElement(image)) {
      return image;
    } else if (typeof image === 'string') {
      return <img src={image} alt="empty" style={imageStyle} className={`${prefixCls}__image`} />;
    } else {
      return (
        <svg width="61px" height="40px" viewBox="0 0 61 40" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(0.000000, 1.000000)">
              <ellipse fill="#F5F5F5" cx="30.5" cy="30.5" rx="30.5" ry="8.5" />
              <path
                d="M8,14 L16.1016016,14 C17.4262005,14 18.5,15.0737995 18.5,16.3983984 C18.5,17.7229972 19.5737995,18.7967967 20.8983984,18.7967967 L39.1016016,18.7967967 C40.4262005,18.7967967 41.5,17.7229972 41.5,16.3983984 C41.5,15.0737995 42.5737995,14 43.8983984,14 L52,14 C52.5522847,14 53,14.4477153 53,15 L53,29 C53,31.209139 51.209139,33 49,33 L11,33 C8.790861,33 7,31.209139 7,29 L7,15 C7,14.4477153 7.44771525,14 8,14 Z"
                stroke="#D9D9D9"
                fill="#FAFAFA"
              />
              <path
                d="M7.34587252,14.1911631 L14.8857295,1.90750067 C15.6132226,0.722295128 16.9040854,1.14364005e-15 18.2947537,0 L41.70114,0 C43.0918102,8.62632224e-15 44.3826743,0.722296971 45.1101669,1.90750495 L52.65,14.1911631 L52.65,14.1911631 L44.0201775,14.1911631 C42.6922539,14.1911631 41.6157591,15.2676579 41.6157591,16.5955815 C41.6157591,17.9235052 40.5392643,19 39.2113406,19 L20.7845564,19 C19.4566328,19 18.380138,17.9235052 18.380138,16.5955815 C18.380138,15.2676579 17.3036432,14.1911631 15.9757195,14.1911631 L7.34587252,14.1911631 L7.34587252,14.1911631 Z"
                stroke="#D9D9D9"
                fill="#FFFFFF"
              />
            </g>
          </g>
        </svg>
      );
    }
  };

  return (
    <div {...otherProps} className={cls} style={style}>
      <div className={`${prefixCls}__image-container`}>{renderImage()}</div>
      {typeof props.description === 'boolean' && !description ? null : (
        <p className={`${prefixCls}__desc`} style={descStyle}>
          {description}
        </p>
      )}
      {children && <div className={`${prefixCls}__footer`}>{children}</div>}
    </div>
  );
};

Empty.displayName = 'Empty';

export default Empty;
