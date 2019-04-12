import createComponentExample from '../../../lib';
import { Radio, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'radio',
    examples: ['basic', 'group', 'disabled'],
    dependencies: { Radio, Button },
});
