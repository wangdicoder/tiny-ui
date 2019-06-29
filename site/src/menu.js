import { lazy } from 'react';

const GUIDE_MENU = [{
    title: 'Tiny UI Introduction',
    route: 'introduction',
    component: lazy(() => import('./docs/guide/introduction')),
}, {
    title: 'Get Started',
    route: 'get-started',
    component: lazy(() => import('./docs/guide/get-started')),
}, {
    title: 'Customise Theme',
    route: 'customise-theme',
    component: lazy(() => import('./docs/guide/customise-theme')),
}, {
    title: 'Use in create-react-app',
    route: 'use-with-create-react-app',
    component: lazy(() => import('./docs/guide/use-react-app')),
}, {
    title: 'Change Log',
    route: 'change-log',
    component: lazy(() => import('./docs/guide/change-log')),
}, {
    title: 'FAQ',
    route: 'faq',
    component: lazy(() => import('./docs/guide/faq')),
}];

const COMPONENT_MENU = [{
    title: 'Foundation',
    children: [{
        title: 'Color',
        route: 'color',
        component: lazy(() => import('./docs/foundation/color')),
    }, {
        title: 'Icon',
        route: 'icon',
    }, {
        title: 'Typography',
        route: 'typography',
    }],
}, {
    title: 'Layout',
    children: [{
        title: 'Grid',
        route: 'grid',
    }, {
        title: 'Layout',
        route: 'layout',
    }],
}, {
    title: 'Navigation',
    children: [{
        title: 'Breadcrumb',
        route: 'breadcrumb',
        component: lazy(() => import('./docs/component/breadcrumb')),
    },],
}, {
    title: 'Data Display',
    children: [{
        title: 'Avatar',
        route: 'avatar',
        component: lazy(() => import('./docs/component/avatar')),
    }, {
        title: 'Badge',
        route: 'badge',
        component: lazy(() => import('./docs/component/badge')),
    }, {
        title: 'Button',
        route: 'button',
        component: lazy(() => import('./docs/component/button')),
    }, {
        title: 'Collapse',
        route: 'collapse',
        component: lazy(() => import('./docs/component/collapse')),
    }, {
        title: 'Countdown',
        route: 'countdown',
        component: lazy(() => import('./docs/component/countdown')),
    }, {
        title: 'Flip',
        route: 'flip',
        component: lazy(() => import('./docs/component/flip')),
    }, {
        title: 'Progress',
        route: 'progress',
        component: lazy(() => import('./docs/component/progress')),
    }, {
        title: 'Tag',
        route: 'tag',
        component: lazy(() => import('./docs/component/tag')),
    }],
}, {
    title: 'Form Item',
    children: [{
        title: 'Form',
        route: 'form',
    }, {
        title: 'Checkbox',
        route: 'checkbox',
        component: lazy(() => import('./docs/component/checkbox')),
    }, {
        title: 'Input',
        route: 'input',
        component: lazy(() => import('./docs/component/input')),
    }, {
        title: 'Input Password',
        route: 'input-password',
        component: lazy(() => import('./docs/component/input-password')),
    }, {
        title: 'Native Select',
        route: 'native-select',
        component: lazy(() => import('./docs/component/native-select')),
    }, {
        title: 'Radio',
        route: 'radio',
        component: lazy(() => import('./docs/component/radio')),
    }, {
        title: 'Rate',
        route: 'rate',
        component: lazy(() => import('./docs/component/rate')),
    }, {
        title: 'Switch',
        route: 'switch',
        component: lazy(() => import('./docs/component/switch')),
    }, {
        title: 'Textarea',
        route: 'textarea',
        component: lazy(() => import('./docs/component/textarea')),
    }],
}, {
    title: 'Feedback',
    children: [{
        title: 'Alert',
        route: 'alert',
        component: lazy(() => import('./docs/component/alert')),
    }, {
        title: 'Loader',
        route: 'loader',
        component: lazy(() => import('./docs/component/loader')),
    }, {
        title: 'Loading Bar',
        route: 'loading-bar',
        component: lazy(() => import('./docs/component/loading-bar')),
    },  {
        title: 'Message',
        route: 'message',
        component: lazy(() => import('./docs/component/message')),
    }, {
        title: 'Modal',
        route: 'modal',
        component: lazy(() => import('./docs/component/modal')),
    }, {
        title: 'Notification',
        route: 'notification',
        component: lazy(() => import('./docs/component/notification')),
    }, {
        title: 'Popover',
        route: 'popover',
        component: lazy(() => import('./docs/component/popover')),
    }, {
        title: 'Popconfirm',
        route: 'popconfirm',
        component: lazy(() => import('./docs/component/popconfirm')),
    }],
}, {
    title: 'Miscellany',
    children: [{
        title: 'Divider',
        route: 'divider',
        component: lazy(() => import('./docs/component/divider')),
    }],
}];

export {
    GUIDE_MENU,
    COMPONENT_MENU,
};
