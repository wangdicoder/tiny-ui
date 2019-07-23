import createComponentExample from '../../../lib';
import { Progress, Button } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'progress',
    examples: ['progress-bar', 'progress-circle', 'internal-text', 'active', 'linear-gradient', 'dynamic', 'custom-text', 'reverse', 'square-linecaps'],
    dependencies: { Progress, Button },
});
