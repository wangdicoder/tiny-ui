import createComponentExample from '../../../lib';
import { Badge, Button, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'badge',
    examples: ['basic', 'overflow', 'standalone', 'dot', 'custom'],
    dependencies: { Button, Badge, Icon },
});
