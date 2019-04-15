import createComponentExample from '../../../lib';
import { Button, Modal } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'modal',
    examples: ['basic', 'custom-footer', 'position', 'animation'],
    dependencies: { Button, Modal },
});
