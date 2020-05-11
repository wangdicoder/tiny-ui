import Breadcrumb, { BreadcrumbProps } from './breadcrumb';
import BreadcrumbItem, { BreadcrumbItemProps } from './breadcrumb-item';

export { BreadcrumbProps, BreadcrumbItemProps };

type IBreadcrumb = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

const DefaultBreadcrumb = Breadcrumb as IBreadcrumb;
DefaultBreadcrumb.Item = BreadcrumbItem;

export default DefaultBreadcrumb;
