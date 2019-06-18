import createComponentExample from '../../../lib';
import { Loader, Alert, Icon, Switch } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'loader',
    examples: ['basic', 'container', 'tips', 'indicator', 'size', 'state'],
    dependencies: { Loader, Alert, Icon, Switch },
});
