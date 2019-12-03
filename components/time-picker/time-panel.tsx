import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

export interface TimePanelProps {
  value: number;
  count: number;
  onChange: (num: number) => void;
  prefixCls?: string;
}

const TimePanel = (props: TimePanelProps): React.ReactElement => {
  const { prefixCls = 'ty-time-picker', value, count, onChange } = props;
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const scrollToTop = (idx: number, elHeight = 30) => {
    setSelectedIdx(idx);
    panelRef.current &&
      (panelRef.current as HTMLDivElement).scrollTo({
        top: idx * elHeight,
        behavior: 'smooth',
      });
  };

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

  useEffect(() => {
    scrollToTop(value);
    ulRef.current && (ulRef.current as HTMLUListElement).addEventListener('click', ulOnClick);

    return () => {
      ulRef.current && (ulRef.current as HTMLUListElement).removeEventListener('click', ulOnClick);
    };
  }, []);

  return (
    <div className={`${prefixCls}__panel`} ref={panelRef}>
      <ul className={`${prefixCls}__ul`} ref={ulRef}>
        {[...Array(count).fill(0)].map((_, idx) => {
          const cls = classNames(`${prefixCls}__li`, {
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

export default TimePanel;
