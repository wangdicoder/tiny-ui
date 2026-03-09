import { lazy } from 'react';
import { SiteLocale } from './locale/types';

export interface RouterItem {
  title: string;
  route?: string;
  component?: any;
  children?: RouterItem[];
}

type LocalizedLazy = { en: any; zh: any };

function ll(en: () => Promise<any>, zh: () => Promise<any>): LocalizedLazy {
  return { en: lazy(en), zh: lazy(zh) };
}

function pick(l: LocalizedLazy, isZh: boolean) {
  return isZh ? l.zh : l.en;
}

// Guide components
const guide = {
  introduction: ll(
    () => import('../../docs/introduction.md'),
    () => import('../../docs/introduction.zh_CN.md'),
  ),
  getStarted: ll(
    () => import('../../docs/get-started.md'),
    () => import('../../docs/get-started.zh_CN.md'),
  ),
  useInCRA: ll(
    () => import('../../docs/use-react-app.md'),
    () => import('../../docs/use-react-app.zh_CN.md'),
  ),
  customiseTheme: ll(
    () => import('../../docs/customise-theme.md'),
    () => import('../../docs/customise-theme.zh_CN.md'),
  ),
  colors: ll(
    () => import('./containers/color'),
    () => import('./containers/color'),
  ),
  changelog: ll(
    () => import('../../CHANGELOG.md'),
    () => import('../../CHANGELOG.md'),
  ),
  faq: ll(
    () => import('../../docs/faq.md'),
    () => import('../../docs/faq.zh_CN.md'),
  ),
};

// Component lazy imports
const c = {
  button: ll(() => import('../../components/button/index.md'), () => import('../../components/button/index.zh_CN.md')),
  icon: ll(() => import('../../components/icon/index.md'), () => import('../../components/icon/index.zh_CN.md')),
  image: ll(() => import('../../components/image/index.md'), () => import('../../components/image/index.zh_CN.md')),
  link: ll(() => import('../../components/link/index.md'), () => import('../../components/link/index.zh_CN.md')),
  typography: ll(() => import('../../components/typography/index.md'), () => import('../../components/typography/index.zh_CN.md')),
  aspectRatio: ll(() => import('../../components/aspect-ratio/index.md'), () => import('../../components/aspect-ratio/index.zh_CN.md')),
  divider: ll(() => import('../../components/divider/index.md'), () => import('../../components/divider/index.zh_CN.md')),
  grid: ll(() => import('../../components/grid/index.md'), () => import('../../components/grid/index.zh_CN.md')),
  layout: ll(() => import('../../components/layout/index.md'), () => import('../../components/layout/index.zh_CN.md')),
  space: ll(() => import('../../components/space/index.md'), () => import('../../components/space/index.zh_CN.md')),
  split: ll(() => import('../../components/split/index.md'), () => import('../../components/split/index.zh_CN.md')),
  breadcrumb: ll(() => import('../../components/breadcrumb/index.md'), () => import('../../components/breadcrumb/index.zh_CN.md')),
  dropdown: ll(() => import('../../components/dropdown/index.md'), () => import('../../components/dropdown/index.zh_CN.md')),
  menu: ll(() => import('../../components/menu/index.md'), () => import('../../components/menu/index.zh_CN.md')),
  pagination: ll(() => import('../../components/pagination/index.md'), () => import('../../components/pagination/index.zh_CN.md')),
  steps: ll(() => import('../../components/steps/index.md'), () => import('../../components/steps/index.zh_CN.md')),
  avatar: ll(() => import('../../components/avatar/index.md'), () => import('../../components/avatar/index.zh_CN.md')),
  badge: ll(() => import('../../components/badge/index.md'), () => import('../../components/badge/index.zh_CN.md')),
  calendar: ll(() => import('../../components/calendar/index.md'), () => import('../../components/calendar/index.zh_CN.md')),
  card: ll(() => import('../../components/card/index.md'), () => import('../../components/card/index.zh_CN.md')),
  carousel: ll(() => import('../../components/carousel/index.md'), () => import('../../components/carousel/index.zh_CN.md')),
  collapse: ll(() => import('../../components/collapse/index.md'), () => import('../../components/collapse/index.zh_CN.md')),
  countdown: ll(() => import('../../components/countdown/index.md'), () => import('../../components/countdown/index.zh_CN.md')),
  empty: ll(() => import('../../components/empty/index.md'), () => import('../../components/empty/index.zh_CN.md')),
  descriptions: ll(() => import('../../components/descriptions/index.md'), () => import('../../components/descriptions/index.zh_CN.md')),
  flip: ll(() => import('../../components/flip/index.md'), () => import('../../components/flip/index.zh_CN.md')),
  list: ll(() => import('../../components/list/index.md'), () => import('../../components/list/index.zh_CN.md')),
  popover: ll(() => import('../../components/popover/index.md'), () => import('../../components/popover/index.zh_CN.md')),
  progress: ll(() => import('../../components/progress/index.md'), () => import('../../components/progress/index.zh_CN.md')),
  statistic: ll(() => import('../../components/statistic/index.md'), () => import('../../components/statistic/index.zh_CN.md')),
  table: ll(() => import('../../components/table/index.md'), () => import('../../components/table/index.zh_CN.md')),
  tag: ll(() => import('../../components/tag/index.md'), () => import('../../components/tag/index.zh_CN.md')),
  timeline: ll(() => import('../../components/timeline/index.md'), () => import('../../components/timeline/index.zh_CN.md')),
  tooltip: ll(() => import('../../components/tooltip/index.md'), () => import('../../components/tooltip/index.zh_CN.md')),
  tree: ll(() => import('../../components/tree/index.md'), () => import('../../components/tree/index.zh_CN.md')),
  form: ll(() => import('../../components/form/index.md'), () => import('../../components/form/index.zh_CN.md')),
  cascader: ll(() => import('../../components/cascader/index.md'), () => import('../../components/cascader/index.zh_CN.md')),
  checkbox: ll(() => import('../../components/checkbox/index.md'), () => import('../../components/checkbox/index.zh_CN.md')),
  colorPicker: ll(() => import('../../components/color-picker/index.md'), () => import('../../components/color-picker/index.zh_CN.md')),
  datePicker: ll(() => import('../../components/date-picker/index.md'), () => import('../../components/date-picker/index.zh_CN.md')),
  input: ll(() => import('../../components/input/index.md'), () => import('../../components/input/index.zh_CN.md')),
  inputNumber: ll(() => import('../../components/input-number/index.md'), () => import('../../components/input-number/index.zh_CN.md')),
  inputPassword: ll(() => import('../../components/input-password/index.md'), () => import('../../components/input-password/index.zh_CN.md')),
  nativeSelect: ll(() => import('../../components/native-select/index.md'), () => import('../../components/native-select/index.zh_CN.md')),
  radio: ll(() => import('../../components/radio/index.md'), () => import('../../components/radio/index.zh_CN.md')),
  rate: ll(() => import('../../components/rate/index.md'), () => import('../../components/rate/index.zh_CN.md')),
  segmented: ll(() => import('../../components/segmented/index.md'), () => import('../../components/segmented/index.zh_CN.md')),
  slider: ll(() => import('../../components/slider/index.md'), () => import('../../components/slider/index.zh_CN.md')),
  splitButton: ll(() => import('../../components/split-button/index.md'), () => import('../../components/split-button/index.zh_CN.md')),
  switch: ll(() => import('../../components/switch/index.md'), () => import('../../components/switch/index.zh_CN.md')),
  tabs: ll(() => import('../../components/tabs/index.md'), () => import('../../components/tabs/index.zh_CN.md')),
  textarea: ll(() => import('../../components/textarea/index.md'), () => import('../../components/textarea/index.zh_CN.md')),
  timePicker: ll(() => import('../../components/time-picker/index.md'), () => import('../../components/time-picker/index.zh_CN.md')),
  transfer: ll(() => import('../../components/transfer/index.md'), () => import('../../components/transfer/index.zh_CN.md')),
  upload: ll(() => import('../../components/upload/index.md'), () => import('../../components/upload/index.zh_CN.md')),
  alert: ll(() => import('../../components/alert/index.md'), () => import('../../components/alert/index.zh_CN.md')),
  drawer: ll(() => import('../../components/drawer/index.md'), () => import('../../components/drawer/index.zh_CN.md')),
  loader: ll(() => import('../../components/loader/index.md'), () => import('../../components/loader/index.zh_CN.md')),
  loadingBar: ll(() => import('../../components/loading-bar/index.md'), () => import('../../components/loading-bar/index.zh_CN.md')),
  message: ll(() => import('../../components/message/index.md'), () => import('../../components/message/index.zh_CN.md')),
  modal: ll(() => import('../../components/modal/index.md'), () => import('../../components/modal/index.zh_CN.md')),
  notification: ll(() => import('../../components/notification/index.md'), () => import('../../components/notification/index.zh_CN.md')),
  popConfirm: ll(() => import('../../components/pop-confirm/index.md'), () => import('../../components/pop-confirm/index.zh_CN.md')),
  result: ll(() => import('../../components/result/index.md'), () => import('../../components/result/index.zh_CN.md')),
  scrollIndicator: ll(() => import('../../components/scroll-indicator/index.md'), () => import('../../components/scroll-indicator/index.zh_CN.md')),
  skeleton: ll(() => import('../../components/skeleton/index.md'), () => import('../../components/skeleton/index.zh_CN.md')),
  strengthIndicator: ll(() => import('../../components/strength-indicator/index.md'), () => import('../../components/strength-indicator/index.zh_CN.md')),
  backTop: ll(() => import('../../components/back-top/index.md'), () => import('../../components/back-top/index.zh_CN.md')),
  configProvider: ll(() => import('../../components/config-provider/index.md'), () => import('../../components/config-provider/index.zh_CN.md')),
  copyToClipboard: ll(() => import('../../components/copy-to-clipboard/index.md'), () => import('../../components/copy-to-clipboard/index.zh_CN.md')),
  keyboard: ll(() => import('../../components/keyboard/index.md'), () => import('../../components/keyboard/index.zh_CN.md')),
  sticky: ll(() => import('../../components/sticky/index.md'), () => import('../../components/sticky/index.zh_CN.md')),
  select: ll(() => import('../../components/select/index.md'), () => import('../../components/select/index.zh_CN.md')),
  speedDial: ll(() => import('../../components/speed-dial/index.md'), () => import('../../components/speed-dial/index.zh_CN.md')),
  anchor: ll(() => import('../../components/anchor/index.md'), () => import('../../components/anchor/index.zh_CN.md')),
  autoComplete: ll(() => import('../../components/auto-complete/index.md'), () => import('../../components/auto-complete/index.zh_CN.md')),
};

export const getGuideMenu = (s: SiteLocale): RouterItem[] => {
  const isZh = s.locale === 'zh_CN';
  return [
    { title: s.guideMenu.introduction, route: 'introduction', component: pick(guide.introduction, isZh) },
    { title: s.guideMenu.getStarted, route: 'get-started', component: pick(guide.getStarted, isZh) },
    { title: s.guideMenu.useInCRA, route: 'use-with-create-react-app', component: pick(guide.useInCRA, isZh) },
    { title: s.guideMenu.customiseTheme, route: 'customise-theme', component: pick(guide.customiseTheme, isZh) },
    { title: s.guideMenu.colors, route: 'colors', component: pick(guide.colors, isZh) },
    { title: s.guideMenu.changelog, route: 'changelog', component: pick(guide.changelog, isZh) },
    { title: s.guideMenu.faq, route: 'faq', component: pick(guide.faq, isZh) },
  ];
};

export const getComponentMenu = (s: SiteLocale): RouterItem[] => {
  const z = s.locale === 'zh_CN';
  return [
    {
      title: s.categories.foundation,
      children: [
        { title: 'Button', route: 'button', component: pick(c.button, z) },
        { title: 'Icon', route: 'icon', component: pick(c.icon, z) },
        { title: 'Image', route: 'image', component: pick(c.image, z) },
        { title: 'Link', route: 'link', component: pick(c.link, z) },
        { title: 'Typography', route: 'typography', component: pick(c.typography, z) },
      ],
    },
    {
      title: s.categories.layout,
      children: [
        { title: 'Aspect Ratio', route: 'aspect-ratio', component: pick(c.aspectRatio, z) },
        { title: 'Divider', route: 'divider', component: pick(c.divider, z) },
        { title: 'Grid', route: 'grid', component: pick(c.grid, z) },
        { title: 'Layout', route: 'layout', component: pick(c.layout, z) },
        { title: 'Space', route: 'space', component: pick(c.space, z) },
        { title: 'Split', route: 'split', component: pick(c.split, z) },
      ],
    },
    {
      title: s.categories.navigation,
      children: [
        { title: 'Anchor', route: 'anchor', component: pick(c.anchor, z) },
        { title: 'Breadcrumb', route: 'breadcrumb', component: pick(c.breadcrumb, z) },
        { title: 'Dropdown', route: 'dropdown', component: pick(c.dropdown, z) },
        { title: 'Menu', route: 'menu', component: pick(c.menu, z) },
        { title: 'Pagination', route: 'pagination', component: pick(c.pagination, z) },
        { title: 'SpeedDial', route: 'speed-dial', component: pick(c.speedDial, z) },
        { title: 'Steps', route: 'steps', component: pick(c.steps, z) },
      ],
    },
    {
      title: s.categories.dataDisplay,
      children: [
        { title: 'Avatar', route: 'avatar', component: pick(c.avatar, z) },
        { title: 'Badge', route: 'badge', component: pick(c.badge, z) },
        { title: 'Calendar', route: 'calendar', component: pick(c.calendar, z) },
        { title: 'Card', route: 'card', component: pick(c.card, z) },
        { title: 'Carousel', route: 'carousel', component: pick(c.carousel, z) },
        { title: 'Collapse', route: 'collapse', component: pick(c.collapse, z) },
        { title: 'Countdown', route: 'countdown', component: pick(c.countdown, z) },
        { title: 'Empty', route: 'empty', component: pick(c.empty, z) },
        { title: 'Descriptions', route: 'descriptions', component: pick(c.descriptions, z) },
        { title: 'Flip', route: 'flip', component: pick(c.flip, z) },
        { title: 'List', route: 'list', component: pick(c.list, z) },
        { title: 'Popover', route: 'popover', component: pick(c.popover, z) },
        { title: 'Progress', route: 'progress', component: pick(c.progress, z) },
        { title: 'Statistic', route: 'statistic', component: pick(c.statistic, z) },
        { title: 'Table', route: 'table', component: pick(c.table, z) },
        { title: 'Tag', route: 'tag', component: pick(c.tag, z) },
        { title: 'Timeline', route: 'timeline', component: pick(c.timeline, z) },
        { title: 'Tooltip', route: 'tooltip', component: pick(c.tooltip, z) },
        { title: 'Tree', route: 'tree', component: pick(c.tree, z) },
      ],
    },
    {
      title: s.categories.formItem,
      children: [
        { title: 'Form', route: 'form', component: pick(c.form, z) },
        { title: 'AutoComplete', route: 'auto-complete', component: pick(c.autoComplete, z) },
        { title: 'Cascader', route: 'cascader', component: pick(c.cascader, z) },
        { title: 'Checkbox', route: 'checkbox', component: pick(c.checkbox, z) },
        { title: 'ColorPicker', route: 'color-picker', component: pick(c.colorPicker, z) },
        { title: 'DatePicker', route: 'date-picker', component: pick(c.datePicker, z) },
        { title: 'Input', route: 'input', component: pick(c.input, z) },
        { title: 'Input Number', route: 'input-number', component: pick(c.inputNumber, z) },
        { title: 'Input Password', route: 'input-password', component: pick(c.inputPassword, z) },
        { title: 'Native Select', route: 'native-select', component: pick(c.nativeSelect, z) },
        { title: 'Radio', route: 'radio', component: pick(c.radio, z) },
        { title: 'Rate', route: 'rate', component: pick(c.rate, z) },
        { title: 'Segmented', route: 'segmented', component: pick(c.segmented, z) },
        { title: 'Select', route: 'select', component: pick(c.select, z) },
        { title: 'Slider', route: 'slider', component: pick(c.slider, z) },
        { title: 'Split Button', route: 'split-button', component: pick(c.splitButton, z) },
        { title: 'Switch', route: 'switch', component: pick(c.switch, z) },
        { title: 'Tabs', route: 'tabs', component: pick(c.tabs, z) },
        { title: 'Textarea', route: 'textarea', component: pick(c.textarea, z) },
        { title: 'TimePicker', route: 'time-picker', component: pick(c.timePicker, z) },
        { title: 'Transfer', route: 'transfer', component: pick(c.transfer, z) },
        { title: 'Upload', route: 'upload', component: pick(c.upload, z) },
      ],
    },
    {
      title: s.categories.feedback,
      children: [
        { title: 'Alert', route: 'alert', component: pick(c.alert, z) },
        { title: 'Drawer', route: 'drawer', component: pick(c.drawer, z) },
        { title: 'Loader', route: 'loader', component: pick(c.loader, z) },
        { title: 'Loading Bar', route: 'loading-bar', component: pick(c.loadingBar, z) },
        { title: 'Message', route: 'message', component: pick(c.message, z) },
        { title: 'Modal', route: 'modal', component: pick(c.modal, z) },
        { title: 'Notification', route: 'notification', component: pick(c.notification, z) },
        { title: 'PopConfirm', route: 'pop-confirm', component: pick(c.popConfirm, z) },
        { title: 'Result', route: 'result', component: pick(c.result, z) },
        { title: 'Scroll Indicator', route: 'scroll-indicator', component: pick(c.scrollIndicator, z) },
        { title: 'Skeleton', route: 'skeleton', component: pick(c.skeleton, z) },
        { title: 'Strength Indicator', route: 'strength-indicator', component: pick(c.strengthIndicator, z) },
      ],
    },
    {
      title: s.categories.miscellany,
      children: [
        { title: 'BackTop', route: 'back-top', component: pick(c.backTop, z) },
        { title: 'ConfigProvider', route: 'config-provider', component: pick(c.configProvider, z) },
        { title: 'CopyToClipboard', route: 'copy-to-clipboard', component: pick(c.copyToClipboard, z) },
        { title: 'Keyboard', route: 'keyboard', component: pick(c.keyboard, z) },
        { title: 'Sticky', route: 'sticky', component: pick(c.sticky, z) },
      ],
    },
  ];
};
