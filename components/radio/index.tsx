import React from 'react';
import Radio, { RadioProps } from './radio';
import RadioGroup, { RadioGroupProps } from './radio-group';

export { RadioProps, RadioGroupProps };

type IRadio = React.FC<RadioProps> & {
  Group: typeof RadioGroup;
};

const DefaultRadio = Radio as IRadio;
DefaultRadio.Group = RadioGroup;

export default DefaultRadio;
