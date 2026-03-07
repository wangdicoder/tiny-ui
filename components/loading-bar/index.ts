import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import LoadingBar from './loading-bar';

let rafId: number | null = null;
let loadingBar: HTMLElement | null = null;
let outerDiv: HTMLElement | null = null;
let root: Root | null = null;
let width = 0;

const reset = (): void => {
  if (root) {
    root.unmount();
    root = null;
  }
  if (outerDiv) {
    document.body.removeChild(outerDiv);
  }
  loadingBar = null;
  outerDiv = null;
  width = 0;
};

const move = (): void => {
  if (width < 55) {
    width += .4;
    rafId = requestAnimationFrame(move);
  } else if (width < 90) {
    width += .1;
    rafId = requestAnimationFrame(move);
  }

  loadingBar && (loadingBar.style.width = `${width}%`);
};

const createComponent = (): void => {
  outerDiv = document.createElement('div');
  document.body.appendChild(outerDiv);

  const component = React.createElement(LoadingBar, {
    didMount: () => {
      loadingBar = document.getElementById('ty-loading-bar');
      rafId = requestAnimationFrame(move);
    },
  });

  root = createRoot(outerDiv);
  root.render(component);
};

const unmountDom = (): void => {
  setTimeout(() => {
    loadingBar && (loadingBar.style.opacity = '0');
  }, 300);
  setTimeout(() => {
    reset();
  }, 700);
};

const start = (): void => {
  if (!outerDiv) {
    reset();
    createComponent();
  }
};

const succeed = (): void => {
  if (rafId) cancelAnimationFrame(rafId);

  if (outerDiv && loadingBar) {
    loadingBar.style.width = '100%';
    unmountDom();
  }
};

const fail = (): void => {
  if (rafId) cancelAnimationFrame(rafId);

  if (outerDiv && loadingBar) {
    loadingBar.style.width = '100%';
    loadingBar.style.backgroundColor = '#f30';
    unmountDom();
  }
};

export default {
  start,
  succeed,
  fail,
};
