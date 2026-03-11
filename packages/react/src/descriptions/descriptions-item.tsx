import { DescriptionsItemProps } from './types';

const DescriptionsItem = (props: DescriptionsItemProps): JSX.Element => {
  return props.children as JSX.Element;
};

DescriptionsItem.displayName = 'DescriptionsItem';

export default DescriptionsItem;
