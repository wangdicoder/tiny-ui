import createComponentExample from '../../../lib';
import { Collapse } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'collapse',
    examples: ['basic', 'accordion', 'nested', 'borderless', 'deletable'],
    dependencies: { Collapse },
});
