import createComponentExample from '../../../lib';
import { Switch, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'switch',
    examples: ['basic', 'text', 'size', 'loading', 'disabled'],
    dependencies: { Switch, Button },
});
