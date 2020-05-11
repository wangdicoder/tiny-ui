import Radio, { RadioProps } from './radio';
import RadioGroup, { RadioGroupProps } from './radio-group';

export { RadioProps, RadioGroupProps };

type IRadio = typeof Radio & {
  Group: typeof RadioGroup;
};

const DefaultRadio = Radio as IRadio;
DefaultRadio.Group = RadioGroup;

export default DefaultRadio;
