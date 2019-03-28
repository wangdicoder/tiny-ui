import * as React from 'react';
import classNames from 'classnames';

export type ContainerTypes = {
    placement?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    children?: React.ReactNode,
    prefixCls?: string,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-container',
    placement: 'top-left',
};

const Container = (props: ContainerTypes) => {
    const { placement, prefixCls, children } = props;
    const cls = classNames(
        prefixCls,
        `${prefixCls}_${placement}`,
    );

    return (
        <div className={cls}>
            {children}
        </div>
    );
};

Container.defaultProps = defaultProps;

export default Container;
