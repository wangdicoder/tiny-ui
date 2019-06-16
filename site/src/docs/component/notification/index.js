import createComponentExample from '../../../lib';
import { Button, Notification, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'notification',
    examples: ['basic', 'type', 'icon', 'duration', 'placement'],
    dependencies: { Button, Notification, Icon },
});
