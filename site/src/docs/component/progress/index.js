import React from 'react';
import createComponentExample from '../../../lib';
import { Progress } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'progress',
    examples: ['basic', 'internal-text', 'active'],
    dependencies: { Progress },
});
