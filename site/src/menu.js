import React, {lazy} from 'react';

const GUIDE_MENU = [{
    title: 'Get Started',
    route: '/get-started',
    component: lazy(() => import('./docs/guide/get-started')),
},{
    title: 'Customise Theme',
    route: '/customise-theme',
    // component: lazy(() => import('../../guide/customise-theme')),
},{
    title: 'Use in create-react-app',
    route: '/use-with-create-react-app',
},{
    title: 'Change Log',
    route: '/change-log',
},{
    title: 'FAQ',
    route: '/faq',
},];

const COMPONENT_MENU = [{
    title: 'Basic',
    children: [{
        title: 'Button',
        route: '/button',
        component: lazy(() => import('./docs/component/button')),
    }, {
        title: 'Icon',
        route: '/icon',
    }, {
        title: 'Color',
        route: '/color',
    }, {
        title: 'Typography',
        route: '/typography',
    }],
}, {
    title: 'Layout',
    children: [{
        title: 'Grid',
        route: '/grid',
    }, {
        title: 'Layout',
        route: '/layout',
    }],
}, {
    title: 'Form',
    children: [{
        title: 'Radio',
        route: '/radio',
    }],
}, {
    title: 'Data Display',
    children: [{
        title: 'Avatar',
        route: '/avatar',
    }, {
        title: 'Badge',
        route: '/badge',
    }],
}, {
    title: 'Feedback',
    children: [{
        title: 'Alert',
        route: '/alert',
    }, {
        title: 'Modal',
        route: '/modal',
    }],
}, {
    title: 'Miscellany',
    children: [{
        title: 'Divider',
        route: '/divider',
    }],
}];

export {
    GUIDE_MENU,
    COMPONENT_MENU,
};
