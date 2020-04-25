import React from 'react';
import Flip, { FlipProps, FlipDirection } from './flip';
import FlipItem, { FlipItemProps } from './flip-item';

export { FlipProps, FlipDirection, FlipItemProps };

type IFlip = React.FC<FlipProps> & {
  Item: typeof FlipItem;
};

const DefaultFlip = Flip as IFlip;
DefaultFlip.Item = FlipItem;

export default DefaultFlip;
