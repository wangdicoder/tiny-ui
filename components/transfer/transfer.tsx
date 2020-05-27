import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import TransferPanel from './transfer-panel';
import Button from '../button/button';
import { ArrowDown } from '../_utils/components';

export type TransferItem = {
  key: string;
  label: string;
  disabled: boolean;
};

export interface TransferProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  dataSource?: TransferItem[];
  leftKeys?: string[];
  rightKeys?: string[];
  defaultLeftKeys?: string[];
  defaultRightKeys?: string[];
  disabled?: boolean;
  titles?: [ReactNode, ReactNode];
  buttonTexts?: [ReactNode, ReactNode];
  onChange?: (targetKeys: string[], direction: string, moveKeys: string[]) => void;
}

const Transfer = React.forwardRef<HTMLDivElement, TransferProps>(
  (props: TransferProps, ref): React.ReactElement => {
    const {
      dataSource = [],
      defaultLeftKeys = [],
      defaultRightKeys = [],
      buttonTexts,
      className,
      onChange,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('transfer', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const [leftChecked, setLeftChecked] = useState(
      'leftKeys' in props ? (props.leftKeys as string[]) : defaultLeftKeys
    );
    const [rightChecked, setRightChecked] = useState(
      'rightKeys' in props ? (props.rightKeys as string[]) : defaultRightKeys
    );

    const addToLeft = () => {};

    const addToRight = () => {};

    useEffect(() => {
      setLeftChecked([]);
      setRightChecked([]);
    }, []);

    return (
      <div {...otherProps} className={cls} ref={ref}>
        <TransferPanel dataSource={[]} />
        <div className={`${prefixCls}__buttons`}>
          <Button
            btnType="primary"
            size="sm"
            onClick={addToLeft}
            disabled={rightChecked.length === 0}>
            <ArrowDown size={14} className={`${prefixCls}__left-arrow`} />
            {buttonTexts && buttonTexts[0] !== undefined && <span>{buttonTexts[0]}</span>}
          </Button>
          <Button
            btnType="primary"
            size="sm"
            onClick={addToRight}
            disabled={leftChecked.length === 0}>
            {buttonTexts && buttonTexts[1] !== undefined && <span>{buttonTexts[1]}</span>}
            <ArrowDown size={14} className={`${prefixCls}__right-arrow`} />
          </Button>
        </div>
        <TransferPanel dataSource={[]} />
      </div>
    );
  }
);

Transfer.displayName = 'Transfer';

export default Transfer;
