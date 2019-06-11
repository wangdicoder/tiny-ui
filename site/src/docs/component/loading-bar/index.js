import createComponentExample from '../../../lib';
import { Button, LoadingBar } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'loading-bar',
    examples: ['basic'],
    dependencies: { Button, LoadingBar },
});
