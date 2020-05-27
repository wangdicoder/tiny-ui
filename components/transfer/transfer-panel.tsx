import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { TransferItem } from './transfer';
import Checkbox from '../checkbox/checkbox';
import CheckboxGroup from '../checkbox/checkbox-group';

export interface TransferPanelProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'title'> {
  dataSource: TransferItem[];
  title?: ReactNode;
  footer?: ReactNode;
}

const TransferPanel = React.forwardRef<HTMLDivElement, TransferPanelProps>(
  (props: TransferPanelProps, ref): React.ReactElement => {
    const { dataSource, title, footer, className, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('transfer-panel', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);

    const allChecked = (): boolean => {
      return true;
    };

    const handleAllCheckedChange = () => {};

    const isIndeterminate = (): boolean => {
      return false;
    };

    const checkedSummary = () => {};

    return (
      <div {...otherProps} className={cls} ref={ref}>
        <div className={`${prefixCls}__header`}>{title}</div>
        <div className={`${prefixCls}__body`}>
          <CheckboxGroup>
            {dataSource.map(({ key, label, disabled }) => {
              return (
                <Checkbox key={key} disabled={disabled}>
                  {label}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>
        <div className={`${prefixCls}__footer`}>
          <Checkbox
            checked={allChecked()}
            onChange={handleAllCheckedChange}
            indeterminate={isIndeterminate()}>
            {checkedSummary}
          </Checkbox>
          {footer}
        </div>
      </div>
    );
  }
);

TransferPanel.displayName = 'TransferPanel';

export default TransferPanel;
