import createComponentExample from '../../../lib';
import { Button, Message } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'message',
    examples: ['basic', 'duration', 'type', 'extra'],
    dependencies: { Button, Message },
});
