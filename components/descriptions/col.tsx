import React from 'react';
import { DescriptionsItemProps } from './descriptions-item';

type Props = {
  index: number;
  bordered: boolean;
  colon: boolean;
  type: 'label' | 'content' | 'item';
  prefixCls: string;
  item: React.ReactElement<DescriptionsItemProps>;
};

const Col = (props: Props): React.ReactElement => {
  const { item, colon, type, bordered, prefixCls } = props;

  const { label, children, span = 1 } = item.props;
  switch (type) {
    case 'item':
      if (bordered) {
        return (
          <>
            <th className={`${prefixCls}__item-label`} colSpan={1}>
              {label}
              {colon ? ':' : ''}
            </th>
            <td className={`${prefixCls}__item-content`} colSpan={span * 2 - 1}>
              {children}
            </td>
          </>
        );
      } else {
        return (
          <td className={`${prefixCls}__item`} colSpan={span}>
            <span className={`${prefixCls}__item-label`}>
              {label}
              {colon ? ':' : ''}
            </span>
            <span className={`${prefixCls}__item-content`}>{children}</span>
          </td>
        );
      }
    case 'label':
      return (
        <th className={`${prefixCls}__item-label`} colSpan={span}>
          {label}
          {colon ? ':' : ''}
        </th>
      );
    case 'content':
      return (
        <td className={`${prefixCls}__item-content`} colSpan={span}>
          {children}
        </td>
      );
  }
};

export default Col;
