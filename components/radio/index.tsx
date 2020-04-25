import React from 'react';
import Radio, { RadioProps } from './radio';
import RadioGroup, { RadioGroupProps } from './radio-group';

export { RadioProps, RadioGroupProps };

type IRadio = React.FC<RadioProps> & {
  Group: typeof RadioGroup;
};

const defaultRadio = Radio as IRadio;
defaultRadio.Group = RadioGroup;

export default defaultRadio;
