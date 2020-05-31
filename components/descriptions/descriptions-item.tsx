import React from 'react';
import { BaseProps } from '../_utils/props';

export interface DescriptionsItemProps extends BaseProps {
  label?: React.ReactNode;
  span?: number;
  children: React.ReactNode;
}

const DescriptionsItem = (props: DescriptionsItemProps): JSX.Element => {
  return props.children as JSX.Element;
};

DescriptionsItem.displayName = 'DescriptionsItem';

export default DescriptionsItem;
