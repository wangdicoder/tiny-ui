import createComponentExample from '../../../lib';
import { Avatar, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'avatar',
    examples: ['basic', 'type', 'group', 'auto-font'],
    dependencies: { Button, Avatar },
});
