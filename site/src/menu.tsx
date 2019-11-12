import React, { lazy } from 'react';

const GUIDE_MENU = [{
  title: 'Tiny UI Introduction',
  route: 'introduction',
  component: lazy(() => import('../../docs/introduction.md')),
}, {
  title: 'Get Started',
  route: 'get-started',
  component: lazy(() => import('../../docs/get-started.md')),
}, {
  title: 'Customise Theme',
  route: 'customise-theme',
  component: lazy(() => import('../../docs/customise-theme.md')),
}, {
  title: 'Use in create-react-app',
  route: 'use-with-create-react-app',
  component: lazy(() => import('../../docs/use-react-app.md')),
}, {
  title: 'Change Log',
  route: 'change-log',
  component: lazy(() => import('../../docs/change-log.md')),
}, {
  title: 'FAQ',
  route: 'faq',
  component: lazy(() => import('../../docs/faq.md')),
}];

const COMPONENT_MENU = [{
  title: 'Foundation',
  children: [{
    title: 'Button',
    route: 'button',
    component: lazy(() => import('../../components/button/index.md')),
  }, {
    title: 'Color',
    route: 'color',
    component: lazy(() => import('./containers/color')),
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
    component: lazy(() => import('../../components/breadcrumb/index.md')),
  },],
}, {
  title: 'Data Display',
  children: [{
    title: 'Avatar',
    route: 'avatar',
    component: lazy(() => import('../../components/avatar/index.md')),
  }, {
    title: 'Badge',
    route: 'badge',
    // component: lazy(() => import('./docs/component/badge')),
  }, {
    title: 'Collapse',
    route: 'collapse',
    // component: lazy(() => import('./docs/component/collapse')),
  }, {
    title: 'Countdown',
    route: 'countdown',
    // component: lazy(() => import('./docs/component/countdown')),
  }, {
    title: 'Flip',
    route: 'flip',
    // component: lazy(() => import('./docs/component/flip')),
  }, {
    title: 'Progress',
    route: 'progress',
    // component: lazy(() => import('./docs/component/progress')),
  }, {
    title: 'Tag',
    route: 'tag',
    // component: lazy(() => import('./docs/component/tag')),
  }, {
    title: 'Timeline',
    route: 'timeline',
    // component: lazy(() => import('./docs/component/timeline')),
  }],
}, {
  title: 'Form Item',
  children: [{
    title: 'Form',
    route: 'form',
  }, {
    title: 'Checkbox',
    route: 'checkbox',
    // component: lazy(() => import('./docs/component/checkbox')),
  }, {
    title: 'Input',
    route: 'input',
    // component: lazy(() => import('./docs/component/input')),
  }, {
    title: 'Input Password',
    route: 'input-password',
    // component: lazy(() => import('./docs/component/input-password')),
  }, {
    title: 'Native Select',
    route: 'native-select',
    // component: lazy(() => import('./docs/component/native-select')),
  }, {
    title: 'Radio',
    route: 'radio',
    // component: lazy(() => import('./docs/component/radio')),
  }, {
    title: 'Rate',
    route: 'rate',
    // component: lazy(() => import('./docs/component/rate')),
  }, {
    title: 'Switch',
    route: 'switch',
    // component: lazy(() => import('./docs/component/switch')),
  }, {
    title: 'Textarea',
    route: 'textarea',
    // component: lazy(() => import('./docs/component/textarea')),
  }],
}, {
  title: 'Feedback',
  children: [{
    title: 'Alert',
    route: 'alert',
    component: lazy(() => import('../../components/alert/index.md')),
  }, {
    title: 'Loader',
    route: 'loader',
    // component: lazy(() => import('./docs/component/loader')),
  }, {
    title: 'Loading Bar',
    route: 'loading-bar',
    // component: lazy(() => import('./docs/component/loading-bar')),
  }, {
    title: 'Message',
    route: 'message',
    // component: lazy(() => import('./docs/component/message')),
  }, {
    title: 'Modal',
    route: 'modal',
    // component: lazy(() => import('./docs/component/modal')),
  }, {
    title: 'Notification',
    route: 'notification',
    component: lazy(() => import('../../components/notification/index.md')),
  }, {
    title: 'Popover',
    route: 'popover',
    // component: lazy(() => import('./docs/component/popover')),
  }, {
    title: 'Popconfirm',
    route: 'popconfirm',
    // component: lazy(() => import('./docs/component/popconfirm')),
  }],
}, {
  title: 'Miscellany',
  children: [{
    title: 'Divider',
    route: 'divider',
    // component: lazy(() => import('./docs/component/divider')),
  }],
}];

export {
  GUIDE_MENU,
  COMPONENT_MENU,
};
