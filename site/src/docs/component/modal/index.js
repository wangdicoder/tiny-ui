import createComponentExample from '../../../lib';
import { Button, Modal } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'modal',
    examples: ['basic', 'custom-footer', 'placement.md', 'animation'],
    dependencies: { Button, Modal },
});
