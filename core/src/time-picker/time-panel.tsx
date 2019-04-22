import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

export type TimePanelProps = {
    value: number,
    count: number,
    onChange: (num: number) => void,
    prefixCls?: string,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-time-picker',
};

const TimePanel = (props: TimePanelProps) => {
    const { value, count, onChange, prefixCls } = props;
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const panelRef = useRef<HTMLDivElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);

    const ulOnClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.nodeName === 'LI') {
            const idx: string | undefined = target.dataset.idx;
            const elHeight = target.clientHeight;
            if (idx) {
                scrollToTop(+idx, elHeight);
                onChange && onChange(+idx);
            }
        }
    };

    const scrollToTop = (idx: number, elHeight: number = 30) => {
        setSelectedIdx(idx);
        panelRef.current && panelRef.current.scrollTo({
            top: idx * elHeight,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToTop(value);
        ulRef.current && ulRef.current.addEventListener('click', ulOnClick);

        return () => {
            ulRef.current && ulRef.current.removeEventListener('click', ulOnClick);
        };
    }, []);

    return (
        <div className={`${prefixCls}__panel`} ref={panelRef}>
            <ul className={`${prefixCls}__ul`} ref={ulRef}>
                {[...Array(count).fill(0)].map((_, idx) => {
                    const cls = classnames(`${prefixCls}__li`, {
                        [`${prefixCls}__li_selected`]: idx === selectedIdx,
                    });

                    return (
                        <li key={idx} className={cls} data-idx={idx}>
                            {idx.toString().padStart(2, '0')}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

TimePanel.defaultProps = defaultProps;

export default TimePanel;
