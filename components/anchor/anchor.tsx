import React, { useContext, useState, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { AnchorLinkProps, AnchorProps } from './types';
import { AnchorContext } from './anchor-context';
import Sticky from '../sticky';

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
  const [activeId, setActiveId] = useState('');
  const anchorRef = useRef<HTMLUListElement | null>(null);
  const inkBallRef = useRef<HTMLDivElement | null>(null);

  const updateInk = useCallback(() => {
    const anchorEl = anchorRef.current;
    if (anchorEl) {
      const linkNode = anchorEl.getElementsByClassName(`${prefixCls}__link_active`)[0];
      const inkEl = inkBallRef.current;
      if (linkNode && inkEl) {
        const linkEl = linkNode as HTMLLIElement;
        inkEl.style.top = `${linkEl.offsetTop + linkEl.clientHeight / 2 - 4.5}px`;
      }
    }
  }, [prefixCls]);

  const scrollToAnchor = useCallback((anchorName: string): void => {
    const element = document.body.querySelector(`#${anchorName}`);
    if (element) {
      element.scrollIntoView(true);
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorName: string) => {
    const { location } = window;
    let url;
    // if it is a HashRouter mode, prevent the default event and update the query.
    if (location.pathname.includes('/#/')) {
      url = location.protocol + '//' + location.host + location.pathname + `?anchor=${anchorName}`;
    } else {
      url = location.protocol + '//' + location.host + location.pathname + `#${anchorName}`;
    }
    window.history.pushState({ path: url }, '', url);
    scrollToAnchor(anchorName);
  };

  /**
   * If the url contains the hash, check whether there is an element can be scrolled into
   */
  const initHashScroll = useCallback(() => {
    const { location } = window;
    if (location.search) {
      const urlParams = new URLSearchParams(location.search);
      const anchor = urlParams.get('anchor');
      !!anchor && scrollToAnchor(anchor);
    } else if (location.hash) {
      const anchor = location.hash.replace('#', '');
      !!anchor && scrollToAnchor(anchor);
    }
  }, [scrollToAnchor]);

  const handleScroll = useCallback(() => {
    const headings = document.querySelectorAll('*[id]');
    if (headings.length === 0) return;

    let newActiveId = headings[0].id;
    const top = document.documentElement.scrollTop;
    headings.forEach((h) => {
      const el = document.querySelector(`#${h.id}`);
      if (!el) return;
      if ((el as HTMLElement).offsetTop <= top) {
        newActiveId = h.id;
        updateInk();
      }
    });
    setActiveId(newActiveId);
  }, [updateInk]);

  useEffect(() => {
    initHashScroll();
  }, [initHashScroll]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <AnchorContext.Provider value={{ activeId, onClick: handleLinkClick }}>
      <Sticky offsetTop={offsetTop} offsetBottom={offsetBottom}>
        <ul className={cls} style={style} ref={anchorRef}>
          <div className={`${prefixCls}__ink`}>
            <div className={`${prefixCls}__ink-ball`} ref={inkBallRef} />
          </div>
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
      </Sticky>
    </AnchorContext.Provider>
  );
};

Anchor.displayName = 'Anchor';

export default Anchor;
