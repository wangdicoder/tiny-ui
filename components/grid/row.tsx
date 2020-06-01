import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ColProps, RowProps } from './types';

const Row = (props: RowProps): React.ReactElement => {
  const {
    gutter = 0,
    gutterSide = false,
    prefixCls: customisedCls,
    align,
    justify,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('row', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_align-${align}`]: align,
    [`${prefixCls}_justify-${justify}`]: justify,
  });

  const getGutter = (): [number, number] => {
    return Array.isArray(gutter) ? gutter : [gutter, gutter];
  };

  const normalisedGutter = getGutter();
  return (
    <div {...otherProps} className={cls} style={style}>
      {React.Children.map(children, (child, idx: number) => {
        const childElement = child as React.FunctionComponentElement<ColProps>;
        if (childElement.type.displayName === 'Col') {
          const gutterStyle = gutter
            ? {
                paddingLeft: !gutterSide && idx === 0 ? 0 : normalisedGutter[0] / 2, // first child left padding
                paddingRight:
                  !gutterSide && idx === React.Children.count(children) - 1
                    ? 0
                    : normalisedGutter[0] / 2,
              }
            : {};
          const childProps: Partial<ColProps> = {
            style: {
              ...child.props.style,
              ...gutterStyle,
            },
          };
          return React.cloneElement(childElement, childProps);
        }
        return childElement;
      })}
    </div>
  );
};

Row.displayName = 'Row';

export default Row;
