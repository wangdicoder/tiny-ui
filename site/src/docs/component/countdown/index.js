import createComponentExample from '../../../lib';
import { Countdown } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'countdown',
    examples: ['basic', 'millisecond'],
    dependencies: { Countdown },
});
