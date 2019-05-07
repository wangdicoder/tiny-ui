import createComponentExample from '../../../lib';
import { Popover, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'popover',
    examples: ['basic', 'placement', 'arrow'],
    dependencies: { Popover, Button },
});
