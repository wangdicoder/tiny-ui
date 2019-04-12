import createComponentExample from '../../../lib';
import { Checkbox, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'checkbox',
    examples: ['basic', 'group', 'check-all', 'disabled'],
    dependencies: { Checkbox, Button },
});
