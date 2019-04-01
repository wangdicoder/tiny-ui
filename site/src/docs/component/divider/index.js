import React from 'react';
import createComponentExample from '../../../lib';
import { Divider } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'divider',
    examples: ['horizontal', 'vertical', 'align-title'],
    dependencies: { Divider },
});
