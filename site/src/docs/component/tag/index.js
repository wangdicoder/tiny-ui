import createComponentExample from '../../../lib';
import { Button, Tag, Input, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'tag',
    examples: ['basic', 'dynamic', 'checkable', 'color', 'controlled'],
    dependencies: { Button, Tag, Input, Icon },
});
