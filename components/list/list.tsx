import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ListProps } from './types';

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    dataSource = [],
    renderItem,
    header,
    footer,
    loading = false,
    bordered = false,
    split = true,
    size,
    grid,
    locale,
    pagination,
    prefixCls: customisedCls,
    className,
    style,
    children,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('list', configContext.prefixCls, customisedCls);
  const listSize = size || configContext.componentSize || 'md';

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = pagination && pagination.pageSize ? pagination.pageSize : 10;

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${listSize}`]: listSize,
    [`${prefixCls}_bordered`]: bordered,
    [`${prefixCls}_split`]: split,
    [`${prefixCls}_loading`]: loading,
    [`${prefixCls}_grid`]: grid,
  });

  const paginatedData = () => {
    if (!pagination) return dataSource;
    const page = pagination.current ?? currentPage;
    const start = (page - 1) * pageSize;
    return dataSource.slice(start, start + pageSize);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    pagination && pagination.onChange?.(page, pageSize);
  };

  const renderItems = () => {
    const items = paginatedData();
    if (items.length === 0 && !children) {
      return (
        <div className={`${prefixCls}__empty`}>
          {locale?.emptyText ?? 'No Data'}
        </div>
      );
    }
    if (renderItem) {
      const rendered = items.map((item, index) => renderItem(item, index));
      if (grid) {
        return (
          <div
            className={`${prefixCls}__grid`}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${grid.column || 3}, 1fr)`,
              gap: grid.gutter ? `${grid.gutter}px` : undefined,
            }}
          >
            {rendered}
          </div>
        );
      }
      return rendered;
    }
    return children;
  };

  const paginationConfig = pagination && typeof pagination === 'object' ? pagination : undefined;
  const totalItems = paginationConfig?.total ?? dataSource.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const activePage = paginationConfig?.current ?? currentPage;

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      {header && <div className={`${prefixCls}__header`}>{header}</div>}
      <div className={`${prefixCls}__body`}>
        {loading ? (
          <div className={`${prefixCls}__loading`}>Loading...</div>
        ) : (
          renderItems()
        )}
      </div>
      {footer && <div className={`${prefixCls}__footer`}>{footer}</div>}
      {pagination && totalPages > 1 && (
        <div className={`${prefixCls}__pagination`}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              className={classNames(`${prefixCls}__page-btn`, {
                [`${prefixCls}__page-btn_active`]: page === activePage,
              })}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

List.displayName = 'List';
export default List;
