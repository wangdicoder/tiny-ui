export type Container = HTMLElement | Window;

export const getScroll = (node: Container, isVertical = true): number => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const windowProp = isVertical ? 'pageYOffset' : 'pageXOffset';
  const elementProp = isVertical ? 'scrollTop' : 'scrollLeft';
  return node === window ? (node as Window)[windowProp] : (node as HTMLElement)[elementProp];
};

export const getRect = (node: Container = window): ClientRect => {
  return node !== window
    ? (node as HTMLElement).getBoundingClientRect()
    : {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: window.document.documentElement.clientWidth,
        height: window.document.documentElement.clientHeight,
      };
};

/**
 * Get element absolute position relative to the root
 * @param node
 */
export const getAbsolutePosition = (node: Container = window): { x: number; y: number } => {
  if (node === window) {
    return { x: 0, y: 0 };
  }
  const x =
    (node as HTMLElement).getBoundingClientRect().left + document.documentElement.scrollLeft;
  const y = (node as HTMLElement).getBoundingClientRect().top + document.documentElement.scrollTop;
  return { x, y };
};

export const getNodeHeight = (node: Container): number => {
  if (!node) {
    return 0;
  }
  if (node === window) {
    return window.innerHeight;
  }
  return (node as HTMLElement).clientHeight;
};
