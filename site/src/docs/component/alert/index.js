import createComponentExample from '../../../lib';
import { Alert } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'alert',
    examples: ['basic', 'type', 'closable', 'title', 'icon', 'close-btn'],
    dependencies: { Alert },
});
