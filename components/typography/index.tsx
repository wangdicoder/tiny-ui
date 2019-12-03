import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface TypographyProps extends BaseProps {
  children?: React.ReactNode;
}

const generator = (type: string, defaultPrefixCls: string) => {
  const Component = (props: TypographyProps): React.ReactElement => {
    const { prefixCls, className, style, children } = props;
    const cls = classNames(prefixCls, className);

    return React.createElement(
      type,
      {
        style,
        className: cls,
      },
      children
    );
  };

  Component.defaultProps = {
    prefixCls: defaultPrefixCls,
  };

  return Component;
};

const H1 = generator('h1', 'ty-h1');
const H2 = generator('h2', 'ty-h2');
const H3 = generator('h3', 'ty-h3');
const H4 = generator('h4', 'ty-h4');
const H5 = generator('h5', 'ty-h5');
const H6 = generator('h6', 'ty-h6');
const P = generator('p', 'ty-p');

const Typography = { H1, H2, H3, H4, H5, H6, P };

export default Typography;
