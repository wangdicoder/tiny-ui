import React, { useContext, useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import Sticky from '../sticky';
import { AnchorLinkProps } from './types';
import { AnchorContext } from './anchor-context';

export interface AnchorProps extends BaseProps {
  affix?: boolean;
  offsetBottom?: number;
  offsetTop?: number;
  children?: React.ReactNode;
}

const Anchor = (props: AnchorProps): JSX.Element => {
  const {
    offsetTop = 0,
    offsetBottom,
    className,
    style,
    children,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('anchor', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const { hash } = window.location;
  const [activeId, setActiveId] = useState('');

  /**
   * If the url contains the hash, check whether there is an element can be scrolled into
   */
  const hashScroll = useCallback(() => {
    console.log(hash);
    if (hash) {
      const element = document.querySelector(hash);
      if (element)
        setTimeout(() => {
          element.scrollIntoView();
        }, 100);
    }
  }, [hash]);

  const handleScroll = useCallback(() => {
    const headings = document.querySelectorAll('*[id]');
    if (headings.length === 0) return;

    let newActive = headings[0].id;
    const top = document.documentElement.scrollTop;
    headings.forEach((h) => {
      const el = document.querySelector(`#${h.id}`);
      if (!el) return;
      if ((el as HTMLElement).offsetTop <= top) {
        newActive = h.id;
      }
    });
    setActiveId(newActive);
  }, []);

  useEffect(() => {
    hashScroll();

    document.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hashScroll, handleScroll]);

  return (
    <Sticky offsetTop={offsetTop} offsetBottom={offsetBottom}>
      <AnchorContext.Provider value={{ activeId }}>
        <ul className={cls} style={style}>
          {React.Children.map(children, (child) => {
            const childElement = child as React.FunctionComponentElement<AnchorLinkProps>;
            if (childElement.type.displayName === 'AnchorLink') {
              const childProps: Partial<AnchorLinkProps> = {
                prefixCls,
              };
              return React.cloneElement(childElement, childProps);
            }
            return null;
          })}
        </ul>
      </AnchorContext.Provider>
    </Sticky>
  );
};

Anchor.displayName = 'Anchor';

export default Anchor;
