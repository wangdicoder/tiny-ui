import React, { useState, useEffect, useContext, useMemo } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TableProps, ColumnType, SortOrder } from './types';

const getRowKey = <T,>(record: T, rowKey: string | ((record: T) => React.Key), index: number): React.Key => {
  if (typeof rowKey === 'function') return rowKey(record);
  const key = (record as any)[rowKey];
  return key !== undefined ? key : index;
};

const getValue = <T,>(record: T, dataIndex: string): any => {
  return (record as any)[dataIndex];
};

const Table = React.forwardRef<HTMLDivElement, TableProps>((props, ref) => {
  const {
    columns,
    dataSource = [],
    rowKey = 'key',
    loading = false,
    bordered = false,
    size,
    scroll,
    rowSelection,
    pagination,
    onChange,
    emptyText = 'No Data',
    showHeader = true,
    rowClassName,
    onRow,
    prefixCls: customisedCls,
    className,
    style,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('table', configContext.prefixCls, customisedCls);
  const tableSize = size || configContext.componentSize || 'md';

  // Sorting
  const [sortField, setSortField] = useState<string | undefined>();
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = pagination && pagination.pageSize ? pagination.pageSize : 10;

  // Selection
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>(
    rowSelection?.selectedRowKeys ?? []
  );

  useEffect(() => {
    if (rowSelection?.selectedRowKeys) {
      setSelectedKeys(rowSelection.selectedRowKeys);
    }
  }, [rowSelection?.selectedRowKeys]);

  // Initialize default sort
  useEffect(() => {
    for (const col of columns) {
      if (col.defaultSortOrder) {
        setSortField(col.dataIndex);
        setSortOrder(col.defaultSortOrder);
        break;
      }
    }
  }, []);

  const sortedData = useMemo(() => {
    if (!sortField || !sortOrder) return [...dataSource];
    const col = columns.find((c) => c.dataIndex === sortField);
    if (!col?.sorter) return [...dataSource];
    const sorted = [...dataSource];
    const sorterFn =
      typeof col.sorter === 'function'
        ? col.sorter
        : (a: any, b: any) => {
            const va = getValue(a, sortField);
            const vb = getValue(b, sortField);
            if (va < vb) return -1;
            if (va > vb) return 1;
            return 0;
          };
    sorted.sort((a, b) => {
      const result = sorterFn(a, b);
      return sortOrder === 'descend' ? -result : result;
    });
    return sorted;
  }, [dataSource, sortField, sortOrder, columns]);

  const paginatedData = useMemo(() => {
    if (pagination === false) return sortedData;
    const page = pagination?.current ?? currentPage;
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, pagination, currentPage, pageSize]);

  const paginationConfig = pagination && typeof pagination === 'object' ? pagination : undefined;
  const totalItems = paginationConfig?.total ?? dataSource.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const activePage = paginationConfig?.current ?? currentPage;

  const handleSort = (col: ColumnType) => {
    if (!col.sorter) return;
    let newOrder: SortOrder;
    if (sortField !== col.dataIndex) {
      newOrder = 'ascend';
    } else if (sortOrder === 'ascend') {
      newOrder = 'descend';
    } else if (sortOrder === 'descend') {
      newOrder = null;
    } else {
      newOrder = 'ascend';
    }
    setSortField(newOrder ? col.dataIndex : undefined);
    setSortOrder(newOrder);
    onChange?.({ current: activePage, pageSize }, { field: col.dataIndex, order: newOrder });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    pagination && pagination.onChange?.(page, pageSize);
    onChange?.({ current: page, pageSize }, { field: sortField, order: sortOrder });
  };

  const handleSelectAll = () => {
    if (!rowSelection) return;
    const allKeys = paginatedData.map((record, i) => getRowKey(record, rowKey, i));
    const allSelected = allKeys.every((k) => selectedKeys.includes(k));
    const newKeys = allSelected ? [] : allKeys;
    if (!rowSelection.selectedRowKeys) {
      setSelectedKeys(newKeys);
    }
    const newRows = allSelected ? [] : paginatedData;
    rowSelection.onChange?.(newKeys, newRows);
  };

  const handleSelectRow = (record: any, key: React.Key) => {
    if (!rowSelection) return;
    const isRadio = rowSelection.type === 'radio';
    let newKeys: React.Key[];
    if (isRadio) {
      newKeys = [key];
    } else {
      newKeys = selectedKeys.includes(key)
        ? selectedKeys.filter((k) => k !== key)
        : [...selectedKeys, key];
    }
    if (!rowSelection.selectedRowKeys) {
      setSelectedKeys(newKeys);
    }
    const newRows = dataSource.filter((r, i) => newKeys.includes(getRowKey(r, rowKey, i)));
    rowSelection.onChange?.(newKeys, newRows);
  };

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_bordered`]: bordered,
    [`${prefixCls}_${tableSize}`]: tableSize,
    [`${prefixCls}_loading`]: loading,
  });

  const tableStyle: React.CSSProperties = {};
  if (scroll?.x) tableStyle.minWidth = scroll.x;

  const wrapperStyle: React.CSSProperties = {};
  if (scroll?.y) {
    wrapperStyle.maxHeight = scroll.y;
    wrapperStyle.overflowY = 'auto';
  }

  const allPageKeys = paginatedData.map((r, i) => getRowKey(r, rowKey, i));
  const allSelected = allPageKeys.length > 0 && allPageKeys.every((k) => selectedKeys.includes(k));
  const someSelected = allPageKeys.some((k) => selectedKeys.includes(k));

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      <div className={`${prefixCls}__wrapper`} style={wrapperStyle}>
        <table className={`${prefixCls}__table`} style={tableStyle}>
          {showHeader && (
            <thead className={`${prefixCls}__thead`}>
              <tr>
                {rowSelection && (
                  <th className={`${prefixCls}__cell ${prefixCls}__selection-col`}>
                    {rowSelection.type !== 'radio' && (
                      <input
                        type="checkbox"
                        checked={allSelected}
                        ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
                        onChange={handleSelectAll}
                        aria-label="Select all"
                      />
                    )}
                  </th>
                )}
                {columns.map((col, i) => {
                  const key = col.key ?? col.dataIndex ?? i;
                  const thCls = classNames(`${prefixCls}__cell`, col.className, {
                    [`${prefixCls}__cell_sortable`]: !!col.sorter,
                    [`${prefixCls}__cell_align-${col.align}`]: col.align,
                  });
                  return (
                    <th
                      key={key}
                      className={thCls}
                      style={{ width: col.width }}
                      onClick={() => handleSort(col)}
                    >
                      <span className={`${prefixCls}__col-title`}>{col.title}</span>
                      {col.sorter && (
                        <span className={`${prefixCls}__sorter`}>
                          <span className={classNames(`${prefixCls}__sorter-icon`, {
                            [`${prefixCls}__sorter-icon_active`]: sortField === col.dataIndex && sortOrder === 'ascend',
                          })}>▲</span>
                          <span className={classNames(`${prefixCls}__sorter-icon`, {
                            [`${prefixCls}__sorter-icon_active`]: sortField === col.dataIndex && sortOrder === 'descend',
                          })}>▼</span>
                        </span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
          )}
          <tbody className={`${prefixCls}__tbody`}>
            {loading ? (
              <tr>
                <td
                  className={`${prefixCls}__cell ${prefixCls}__loading-cell`}
                  colSpan={columns.length + (rowSelection ? 1 : 0)}
                >
                  Loading...
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  className={`${prefixCls}__cell ${prefixCls}__empty-cell`}
                  colSpan={columns.length + (rowSelection ? 1 : 0)}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              paginatedData.map((record, rowIndex) => {
                const key = getRowKey(record, rowKey, rowIndex);
                const isSelected = selectedKeys.includes(key);
                const rowCls = classNames(`${prefixCls}__row`, {
                  [`${prefixCls}__row_selected`]: isSelected,
                }, typeof rowClassName === 'function' ? rowClassName(record, rowIndex) : rowClassName);
                const rowProps = onRow?.(record, rowIndex) ?? {};
                return (
                  <tr key={key} className={rowCls} {...rowProps}>
                    {rowSelection && (
                      <td className={`${prefixCls}__cell ${prefixCls}__selection-col`}>
                        <input
                          type={rowSelection.type === 'radio' ? 'radio' : 'checkbox'}
                          checked={isSelected}
                          onChange={() => handleSelectRow(record, key)}
                          aria-label={`Select row ${rowIndex + 1}`}
                        />
                      </td>
                    )}
                    {columns.map((col, colIndex) => {
                      const colKey = col.key ?? col.dataIndex ?? colIndex;
                      const value = getValue(record, col.dataIndex);
                      const tdCls = classNames(`${prefixCls}__cell`, col.className, {
                        [`${prefixCls}__cell_ellipsis`]: col.ellipsis,
                        [`${prefixCls}__cell_align-${col.align}`]: col.align,
                      });
                      return (
                        <td key={colKey} className={tdCls} style={{ width: col.width }}>
                          {col.render ? col.render(value, record, rowIndex) : value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {pagination !== false && totalPages > 1 && (
        <div className={`${prefixCls}__pagination`}>
          <button
            type="button"
            className={`${prefixCls}__page-btn`}
            disabled={activePage <= 1}
            onClick={() => handlePageChange(activePage - 1)}
          >
            ‹
          </button>
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
          <button
            type="button"
            className={`${prefixCls}__page-btn`}
            disabled={activePage >= totalPages}
            onClick={() => handlePageChange(activePage + 1)}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
});

Table.displayName = 'Table';
export default Table;
