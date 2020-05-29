import React, { ChangeEvent, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { TransferItem } from './transfer';
import Checkbox from '../checkbox/checkbox';
import CheckboxGroup from '../checkbox/checkbox-group';
import Empty from '../empty';
import Input from '../input/input';

export interface TransferPanelProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'title' | 'onChange'> {
  dataSource: TransferItem[];
  checkedKeys: string[];
  onChange: (checkedKeys: string[]) => void;
  disabled: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  placeholder?: string;
  showSearch?: boolean;
}

const TransferPanel = React.forwardRef<HTMLDivElement, TransferPanelProps>(
  (props: TransferPanelProps, ref): React.ReactElement => {
    const {
      dataSource,
      checkedKeys,
      title,
      placeholder,
      footer,
      showSearch,
      className,
      onChange,
      disabled: allDisabled,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('transfer-panel', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const checkableData = dataSource.filter((item) => !item.disabled);
    const isAllChecked = checkableData.length > 0 && checkedKeys.length === checkableData.length;
    const isIndeterminate = checkedKeys.length > 0 && checkedKeys.length < checkableData.length;

    /**
     * Footer checkbox onChange event
     */
    const handleAllCheckedChange = (e: ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.currentTarget.checked;
      const checkedKeys = isChecked ? checkableData.map((item) => item.key) : [];
      onChange(checkedKeys);
    };

    const checkedSummary = (): string => {
      if (isIndeterminate || isAllChecked) {
        return `${checkedKeys.length} / ${dataSource.length} checked`;
      }
      return `${dataSource.length} items`;
    };

    return (
      <div {...otherProps} className={cls} ref={ref}>
        {title && <div className={`${prefixCls}__header`}>{title}</div>}
        <div className={`${prefixCls}__body`}>
          {showSearch && (
            <div className={`${prefixCls}__input-container`}>
              <Input clearable size="sm" placeholder={placeholder} />
            </div>
          )}
          {dataSource.length > 0 ? (
            <CheckboxGroup
              value={checkedKeys}
              onChange={(values) => onChange(values)}
              className={`${prefixCls}__list`}>
              {dataSource.map(({ key, label, disabled }) => (
                <Checkbox
                  key={key}
                  value={key}
                  disabled={allDisabled || disabled}
                  className={`${prefixCls}__list-item`}>
                  {label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          ) : (
            <Empty className={`${prefixCls}__not-found`} />
          )}
        </div>
        <div className={`${prefixCls}__footer`}>
          <Checkbox
            disabled={allDisabled}
            checked={isAllChecked}
            onChange={handleAllCheckedChange}
            indeterminate={isIndeterminate}>
            {checkedSummary()}
          </Checkbox>
          {footer}
        </div>
      </div>
    );
  }
);

TransferPanel.displayName = 'TransferPanel';

export default TransferPanel;
