import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps, DirectionType, SizeType } from '../_utils/props';
import { DescriptionsItemProps } from './descriptions-item';
import Row from './row';

export interface DescriptionsProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['table']>, 'title'> {
  title?: React.ReactNode;
  bordered?: boolean;
  column?: number;
  size?: SizeType;
  layout?: DirectionType;
  colon?: boolean;
}

const Descriptions = (props: DescriptionsProps): React.ReactElement => {
  const {
    size = 'md',
    bordered = false,
    column = 3,
    layout = 'horizontal',
    colon,
    title,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('descriptions', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_bordered`]: bordered,
  });

  const getRows = (): React.ReactElement<DescriptionsItemProps>[][] => {
    const rows: React.ReactElement<DescriptionsItemProps>[][] = [];
    let columns: React.ReactElement<DescriptionsItemProps>[] | null = null;
    let leftSpans: number;

    const numOfChildren = React.Children.count(children);
    React.Children.forEach(children, (child, idx) => {
      const childElement = child as React.FunctionComponentElement<DescriptionsItemProps>;
      if (childElement.type.displayName === 'DescriptionsItem') {
        let itemNode = childElement;

        if (!columns) {
          leftSpans = column;
          columns = [];
          rows.push(columns);
        }

        // set last span to align the end of Descriptions
        if (idx === numOfChildren - 1) {
          const props = { span: leftSpans };
          itemNode = React.cloneElement(childElement, props);
        }

        // calculate left fill span
        const { span = 1 } = itemNode.props;
        columns.push(itemNode);
        leftSpans -= span;

        if (leftSpans <= 0) {
          columns = null;
        }
      }
    });

    return rows;
  };

  const rows = getRows();
  const displayColon = 'colon' in props ? (props.colon as boolean) : !bordered;
  return (
    <table {...otherProps} className={cls}>
      {title && <caption className={`${prefixCls}__title`}>{title}</caption>}
      <tbody>
        {rows.map((row, idx) => (
          <Row
            key={idx}
            index={idx}
            colon={displayColon}
            bordered={bordered}
            prefixCls={prefixCls}
            layout={layout}
            row={row}
          />
        ))}
      </tbody>
    </table>
  );
};

Descriptions.displayName = 'Descriptions';

export default Descriptions;
