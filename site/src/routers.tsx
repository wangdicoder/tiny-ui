import { lazy } from 'react';

export interface RouterItem {
  title: string;
  route?: string;
  component?: any;
  children?: RouterItem[];
}

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
    title: 'Use in create-react-app',
    route: 'use-with-create-react-app',
    component: lazy(() => import('../../docs/use-react-app.md')),
  },
  {
    title: 'Customise Theme',
    route: 'customise-theme',
    component: lazy(() => import('../../docs/customise-theme.md')),
  },
  {
    title: 'Colors',
    route: 'colors',
    component: lazy(() => import('./containers/color')),
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
        title: 'Icon',
        route: 'icon',
        component: lazy(() => import('../../components/icon/index.md')),
      },
      {
        title: 'Image',
        route: 'image',
        component: lazy(() => import('../../components/image/index.md')),
      },
      {
        title: 'Link',
        route: 'link',
        component: lazy(() => import('../../components/link/index.md')),
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
        title: 'Aspect Ratio',
        route: 'aspect-ratio',
        component: lazy(() => import('../../components/aspect-ratio/index.md')),
      },
      {
        title: 'Divider',
        route: 'divider',
        component: lazy(() => import('../../components/divider/index.md')),
      },
      {
        title: 'Grid',
        route: 'grid',
        component: lazy(() => import('../../components/grid/index.md')),
      },
      {
        title: 'Layout',
        route: 'layout',
        component: lazy(() => import('../../components/layout/index.md')),
      },
      {
        title: 'Space',
        route: 'space',
        component: lazy(() => import('../../components/space/index.md')),
      },
      {
        title: 'Split',
        route: 'split',
        component: lazy(() => import('../../components/split/index.md')),
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
      {
        title: 'Dropdown',
        route: 'dropdown',
        component: lazy(() => import('../../components/dropdown/index.md')),
      },
      {
        title: 'Menu',
        route: 'menu',
        component: lazy(() => import('../../components/menu/index.md')),
      },
      {
        title: 'Pagination',
        route: 'pagination',
        component: lazy(() => import('../../components/pagination/index.md')),
      },
      {
        title: 'Steps',
        route: 'steps',
        component: lazy(() => import('../../components/steps/index.md')),
      },
    ],
  },
  {
    title: 'Data Display',
    children: [
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
        title: 'Card',
        route: 'card',
        component: lazy(() => import('../../components/card/index.md')),
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
        title: 'Descriptions',
        route: 'descriptions',
        component: lazy(() => import('../../components/descriptions/index.md')),
      },
      {
        title: 'Flip',
        route: 'flip',
        component: lazy(() => import('../../components/flip/index.md')),
      },
      {
        title: 'Popover',
        route: 'popover',
        component: lazy(() => import('../../components/popover/index.md')),
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
      {
        title: 'Tree',
        route: 'tree',
        component: lazy(() => import('../../components/tree/index.md')),
      },
    ],
  },
  {
    title: 'Form Item',
    children: [
      {
        title: 'Form',
        route: 'form',
        component: lazy(() => import('../../components/form/index.md')),
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
        title: 'Slider',
        route: 'slider',
        component: lazy(() => import('../../components/slider/index.md')),
      },
      {
        title: 'Split Button',
        route: 'split-button',
        component: lazy(() => import('../../components/split-button/index.md')),
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
      {
        title: 'Transfer',
        route: 'transfer',
        component: lazy(() => import('../../components/transfer/index.md')),
      },
      {
        title: 'Upload',
        route: 'upload',
        component: lazy(() => import('../../components/upload/index.md')),
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
        title: 'PopConfirm',
        route: 'pop-confirm',
        component: lazy(() => import('../../components/pop-confirm/index.md')),
      },
      {
        title: 'Result',
        route: 'result',
        component: lazy(() => import('../../components/result/index.md')),
      },
      {
        title: 'Scroll Indicator',
        route: 'scroll-indicator',
        component: lazy(() => import('../../components/scroll-indicator/index.md')),
      },
      {
        title: 'Skeleton',
        route: 'skeleton',
        component: lazy(() => import('../../components/skeleton/index.md')),
      },
      {
        title: 'Strength Indicator',
        route: 'strength-indicator',
        component: lazy(() => import('../../components/strength-indicator/index.md')),
      },
    ],
  },
  {
    title: 'Miscellany',
    children: [
      {
        title: 'BackTop',
        route: 'back-top',
        component: lazy(() => import('../../components/back-top/index.md')),
      },
      {
        title: 'ConfigProvider',
        route: 'config-provider',
        component: lazy(() => import('../../components/config-provider/index.md')),
      },
      {
        title: 'CopyToClipboard',
        route: 'copy-to-clipboard',
        component: lazy(() => import('../../components/copy-to-clipboard/index.md')),
      },
      {
        title: 'Keyboard',
        route: 'keyboard',
        component: lazy(() => import('../../components/keyboard/index.md')),
      },
      {
        title: 'Sticky',
        route: 'sticky',
        component: lazy(() => import('../../components/sticky/index.md')),
      },
    ],
  },
];
