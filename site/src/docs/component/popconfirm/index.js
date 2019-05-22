import createComponentExample from '../../../lib';
import { Popconfirm, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'popconfirm',
    examples: ['basic', 'placement', 'locale'],
    dependencies: { Popconfirm, Button },
});
