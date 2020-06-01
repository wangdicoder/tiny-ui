import React from 'react';
import { DirectionType } from '../_utils/props';
import Col from './col';
import { DescriptionsItemProps } from './types';

type Props = {
  index: number;
  bordered: boolean;
  colon: boolean;
  layout: DirectionType;
  prefixCls: string;
  row: React.ReactElement<DescriptionsItemProps>[];
};

const Row = (props: Props): React.ReactElement => {
  const { row, index, layout, colon, bordered, prefixCls } = props;

  const renderCols = (renderType: 'label' | 'content' | 'item') => {
    return row.map((item, idx) => (
      <Col
        key={idx}
        index={idx}
        prefixCls={prefixCls}
        item={item}
        bordered={bordered}
        colon={colon}
        type={renderType}
      />
    ));
  };

  if (layout === 'vertical') {
    return (
      <>
        <tr className={`${prefixCls}__row`} key={`label-${index}`}>
          {renderCols('label')}
        </tr>
        <tr className={`${prefixCls}__row`} key={`content-${index}`}>
          {renderCols('content')}
        </tr>
      </>
    );
  }

  return (
    <tr className={`${prefixCls}__row`} key={index}>
      {renderCols('item')}
    </tr>
  );
};

export default Row;
