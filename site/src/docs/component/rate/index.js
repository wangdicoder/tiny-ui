import createComponentExample from '../../../lib';
import { Rate, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'rate',
    examples: ['basic', 'half', 'clearable', 'disabled', 'character'],
    dependencies: { Rate, Icon },
});
