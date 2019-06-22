import createComponentExample from '../../../lib';
import { Button, Input, Icon } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'input',
    examples: ['basic', 'addon', 'addon-button', 'pre-suf-fix', 'size', 'clearable'],
    dependencies: { Button, Input, Icon },
});
