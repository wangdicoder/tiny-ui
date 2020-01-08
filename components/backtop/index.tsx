import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import raf from 'raf';
import { Target } from '../_utils/dom';
import { BaseProps } from '../_utils/props';

export interface BackTopProps extends BaseProps {
  target: () => Target;
  onClick: (e: React.MouseEvent) => void;
  visibilityHeight: number;
  children?: React.ReactNode;
}

const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b;
  }
};

const BackTop = (props: BackTopProps) => {
  const {
    prefixCls = 'ty-backtop',
    visibilityHeight = 300,
    target = () => window,
    onClick,
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(true);

  const getDistanceFromTop = (): number => {
    const targetNode = target();
    if (targetNode === window) {
      return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    }
    return (targetNode as HTMLElement).scrollTop;
  };

  const setScrollToTop = (distance: number): void => {
    const targetNode = target();
    if (targetNode === window) {
      document.body.scrollTop = distance;
      document.documentElement.scrollTop = distance;
    } else {
      (targetNode as HTMLElement).scrollTop = distance;
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollTop = getDistanceFromTop();
    const startTime = Date.now();
    const step = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      setScrollToTop(easeInOutCubic(time, scrollTop, 0, 450));
      if (time < 450) {
        raf(step);
      } else {
        setScrollToTop(0);
      }
    };
    raf(step);
    onClick && onClick(e);
  };

  const onScroll = (): void => {
    if (getDistanceFromTop() > visibilityHeight) {
      !visible && setVisible(true);
    } else if (visible) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const targetNode = target();
    targetNode.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      targetNode.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (visible) {
    return (
      <div className={cls} style={style} onClick={scrollToTop}>
        {children || (
          <svg viewBox="0 0 1024 1024" width="18" height="18">
            <path
              d="M563.2 379.757048 563.2 972.755371C563.2 1001.056998 540.219441 1024 512 1024
                            483.723021 1024 460.8 1001.019181 460.8 972.755371L460.8 379.740842 272.093167
                            568.447675C252.13208 588.408762 219.700711 588.340711 199.746554 568.386554 179.75171
                            548.39171 179.766716 515.958656 199.685432 496.039941L473.973319 221.752055C483.353204
                            211.343458 496.929524 204.8 512 204.8 527.198527 204.8 540.850334 211.438998 550.227358
                            221.968936L824.32552 496.0671C844.244236 515.985815 844.259243 548.418868 824.2644
                            568.413712 804.310241 588.367871 771.878874 588.435921 751.917786 568.474834L563.2
                            379.757048ZM0 51.2C0 22.923021 22.82342 0 51.130666 0L972.869334 0C1001.108021 0 1024
                            22.980559 1024 51.2 1024 79.476979 1001.17658 102.4 972.869334 102.4L51.130666
                            102.4C22.891979 102.4 0 79.419441 0 51.2Z"
              fill="#ffffff"
            />
          </svg>
        )}
      </div>
    );
  }

  return null;
};

export default BackTop;
