import { lazy } from 'react';

export type RouterItem = {
  title: string;
  route?: string;
  component?: any;
  children?: RouterItem[];
};

export const GUIDE_MENU: RouterItem[] = [
  {
    title: 'Introduction',
    route: 'introduction',
    component: lazy(() => import('../../docs/introduction.md')),
  },
  {
    title: 'Get Started',
    route: 'get-started',
    component: lazy(() => import('../../docs/get-started.md')),
  },
  {
    title: 'Customise Theme',
    route: 'customise-theme',
    component: lazy(() => import('../../docs/customise-theme.md')),
  },
  {
    title: 'Use in create-react-app',
    route: 'use-with-create-react-app',
    component: lazy(() => import('../../docs/use-react-app.md')),
  },
  {
    title: 'Changelog',
    route: 'changelog',
    component: lazy(() => import('../../CHANGELOG.md')),
  },
  {
    title: 'FAQ',
    route: 'faq',
    component: lazy(() => import('../../docs/faq.md')),
  },
];

export const COMPONENT_MENU: RouterItem[] = [
  {
    title: 'Foundation',
    children: [
      {
        title: 'Button',
        route: 'button',
        component: lazy(() => import('../../components/button/index.md')),
      },
      {
        title: 'Color',
        route: 'color',
        component: lazy(() => import('./containers/color')),
      },
      {
        title: 'Icon',
        route: 'icon',
      },
      {
        title: 'Image',
        route: 'image',
        component: lazy(() => import('../../components/image/index.md')),
      },
      {
        title: 'Typography',
        route: 'typography',
        component: lazy(() => import('../../components/typography/index.md')),
      },
    ],
  },
  {
    title: 'Layout',
    children: [
      {
        title: 'Grid',
        route: 'grid',
      },
      {
        title: 'Layout',
        route: 'layout',
      },
    ],
  },
  {
    title: 'Navigation',
    children: [
      {
        title: 'Breadcrumb',
        route: 'breadcrumb',
        component: lazy(() => import('../../components/breadcrumb/index.md')),
      },
    ],
  },
  {
    title: 'Data Display',
    children: [
      {
        title: 'Aspect Ratio',
        route: 'aspect-ratio',
        component: lazy(() => import('../../components/aspect-ratio/index.md')),
      },
      {
        title: 'Avatar',
        route: 'avatar',
        component: lazy(() => import('../../components/avatar/index.md')),
      },
      {
        title: 'Badge',
        route: 'badge',
        component: lazy(() => import('../../components/badge/index.md')),
      },
      {
        title: 'Collapse',
        route: 'collapse',
        component: lazy(() => import('../../components/collapse/index.md')),
      },
      {
        title: 'Countdown',
        route: 'countdown',
        component: lazy(() => import('../../components/countdown/index.md')),
      },
      {
        title: 'Empty',
        route: 'empty',
        component: lazy(() => import('../../components/empty/index.md')),
      },
      {
        title: 'Flip',
        route: 'flip',
        component: lazy(() => import('../../components/flip/index.md')),
      },
      {
        title: 'Progress',
        route: 'progress',
        component: lazy(() => import('../../components/progress/index.md')),
      },
      {
        title: 'Tag',
        route: 'tag',
        component: lazy(() => import('../../components/tag/index.md')),
      },
      {
        title: 'Timeline',
        route: 'timeline',
        component: lazy(() => import('../../components/timeline/index.md')),
      },
      {
        title: 'Tooltip',
        route: 'tooltip',
        component: lazy(() => import('../../components/tooltip/index.md')),
      },
    ],
  },
  {
    title: 'Form Item',
    children: [
      {
        title: 'Form',
        route: 'form',
      },
      {
        title: 'Checkbox',
        route: 'checkbox',
        component: lazy(() => import('../../components/checkbox/index.md')),
      },
      {
        title: 'Input',
        route: 'input',
        component: lazy(() => import('../../components/input/index.md')),
      },
      {
        title: 'Input Number',
        route: 'input-number',
        component: lazy(() => import('../../components/input-number/index.md')),
      },
      {
        title: 'Input Password',
        route: 'input-password',
        component: lazy(() => import('../../components/input-password/index.md')),
      },
      {
        title: 'Native Select',
        route: 'native-select',
        component: lazy(() => import('../../components/native-select/index.md')),
      },
      {
        title: 'Radio',
        route: 'radio',
        component: lazy(() => import('../../components/radio/index.md')),
      },
      {
        title: 'Rate',
        route: 'rate',
        component: lazy(() => import('../../components/rate/index.md')),
      },
      {
        title: 'Switch',
        route: 'switch',
        component: lazy(() => import('../../components/switch/index.md')),
      },
      {
        title: 'Textarea',
        route: 'textarea',
        component: lazy(() => import('../../components/textarea/index.md')),
      },
    ],
  },
  {
    title: 'Feedback',
    children: [
      {
        title: 'Alert',
        route: 'alert',
        component: lazy(() => import('../../components/alert/index.md')),
      },
      {
        title: 'Scroll Indicator',
        route: 'scroll-indicator',
        component: lazy(() => import('../../components/scroll-indicator/index.md')),
      },
      {
        title: 'Drawer',
        route: 'drawer',
        component: lazy(() => import('../../components/drawer/index.md')),
      },
      {
        title: 'Loader',
        route: 'loader',
        component: lazy(() => import('../../components/loader/index.md')),
      },
      {
        title: 'Loading Bar',
        route: 'loading-bar',
        component: lazy(() => import('../../components/loading-bar/index.md')),
      },
      {
        title: 'Message',
        route: 'message',
        component: lazy(() => import('../../components/message/index.md')),
      },
      {
        title: 'Modal',
        route: 'modal',
        component: lazy(() => import('../../components/modal/index.md')),
      },
      {
        title: 'Notification',
        route: 'notification',
        component: lazy(() => import('../../components/notification/index.md')),
      },
      {
        title: 'Popover',
        route: 'popover',
        component: lazy(() => import('../../components/popover/index.md')),
      },
      {
        title: 'PopConfirm',
        route: 'pop-confirm',
        component: lazy(() => import('../../components/pop-confirm/index.md')),
      },
      {
        title: 'Result',
        route: 'result',
        component: lazy(() => import('../../components/result/index.md')),
      },
    ],
  },
  {
    title: 'Miscellany',
    children: [
      {
        title: 'Divider',
        route: 'divider',
        component: lazy(() => import('../../components/divider/index.md')),
      },
      {
        title: 'Keyboard',
        route: 'keyboard',
        component: lazy(() => import('../../components/keyboard/index.md')),
      },
    ],
  },
];
