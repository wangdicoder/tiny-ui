import createComponentExample from '../../../lib';
import { Timeline, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'timeline',
    examples: ['basic', 'customise', 'color', 'center'],
    dependencies: { Timeline, Icon },
});
