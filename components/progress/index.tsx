import Circle, { CircleProps } from './circle';
import Bar, { BarProps, BarBackgroundType } from './bar';
import { strokeLineCaps, strokePresetColors } from './shared-props';

export { CircleProps, BarProps, BarBackgroundType, strokeLineCaps, strokePresetColors };

const Progress = {
  Circle,
  Bar,
};

export default Progress;
