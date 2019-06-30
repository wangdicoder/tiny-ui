import createComponentExample from '../../../lib';
import { Button, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'button',
    examples: ['basic', 'color', 'size', 'group', 'icon', 'loading', 'disabled', 'block'],
    dependencies: { Button, Icon },
});
