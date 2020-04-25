import React from 'react';
import Breadcrumb, { BreadcrumbProps } from './breadcrumb';
import BreadcrumbItem, { BreadcrumbItemProps } from './breadcrumb-item';

export { BreadcrumbProps, BreadcrumbItemProps };

type IBreadcrumb = React.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
};

const defaultBreadcrumb = Breadcrumb as IBreadcrumb;
defaultBreadcrumb.Item = BreadcrumbItem;

export default defaultBreadcrumb;
