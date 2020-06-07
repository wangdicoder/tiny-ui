import React, { useRef, useEffect, useCallback } from 'react';

type CollapseTransitionProps = {
  isShow: boolean;
  children: React.ReactNode;
};

const COLLAPSE_DURATION = 250;

const CollapseTransition = (props: CollapseTransitionProps): JSX.Element => {
  const { isShow, children } = props;
  const leaveTimerRef = useRef<number | null>(null);
  const enterTimerRef = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const beforeEnter = useCallback((): void => {
    const el = ref.current;
    if (el) {
      el.style.display = 'block';
      el.style.height = '0px';
    }
  }, []);

  const afterEnter = useCallback((): void => {
    const el = ref.current;
    if (el) {
      el.style.display = 'block';
      el.style.height = '';
    }
  }, []);

  const enter = useCallback((): void => {
    const el = ref.current;
    if (el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      } else {
        el.style.height = '';
      }

      enterTimerRef.current = window.setTimeout(() => afterEnter(), COLLAPSE_DURATION);
    }
  }, [afterEnter]);

  const beforeLeave = useCallback((): void => {
    const el = ref.current;
    if (el) {
      el.style.display = 'block';
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      }
    }
  }, []);

  const afterLeave = useCallback((): void => {
    const el = ref.current;
    if (el) {
      el.style.display = 'none';
      el.style.height = '';
    }
  }, []);

  const leave = useCallback((): void => {
    const el = ref.current;
    if (el) {
      if (el.scrollHeight !== 0) {
        el.style.height = '0px';
      }

      leaveTimerRef.current = window.setTimeout(() => afterLeave(), COLLAPSE_DURATION);
    }
  }, [afterLeave]);

  const triggerChange = useCallback(
    (isCollapsed: boolean): void => {
      const enterTimer = enterTimerRef.current;
      const leaveTimer = leaveTimerRef.current;
      enterTimer && window.clearTimeout(enterTimer);
      leaveTimer && window.clearTimeout(leaveTimer);

      if (isCollapsed) {
        beforeEnter();
        enter();
      } else {
        beforeLeave();
        leave();
      }
    },
    [enter, leave, beforeEnter, beforeLeave]
  );

  useEffect(() => {
    beforeEnter();
    enter();

    return () => {
      beforeLeave();
      leave();
    };
  }, [enter, leave, beforeEnter, beforeLeave]);

  useEffect(() => {
    triggerChange(isShow);
  }, [isShow, triggerChange]);

  return (
    <div className="ty-collapse-transition" ref={ref}>
      {children}
    </div>
  );
};

CollapseTransition.displayName = 'CollapseTransition';

export default CollapseTransition;
