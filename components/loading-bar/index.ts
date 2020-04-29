import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import LoadingBar from './loading-bar';
import raf from 'raf';

let rafId: number | null = null;
let loadingBar: HTMLElement | null = null;
let outerDiv: HTMLElement | null = null;
let width = 0;

const reset = (): void => {
  if (outerDiv) {
    unmountComponentAtNode(outerDiv);
    document.body.removeChild(outerDiv);
  }
  loadingBar = null;
  outerDiv = null;
  width = 0;
};

/**
 * When the loading bar component finish mount, this function will be called
 */
const move = (): void => {
  if (width < 55) {
    width += .4;
    rafId = raf(move);
  } else if (width < 90) {
    width += .1;
    rafId = raf(move);
  }

  loadingBar && (loadingBar.style.width = `${width}%`);
};

const createComponent = (): void => {
  outerDiv = document.createElement('div');
  document.body.appendChild(outerDiv);

  const component = React.createElement(LoadingBar, {
    didMount: () => {
      loadingBar = document.getElementById('ty-loading-bar');
      rafId = raf(move);
    },
  });

  render(component, outerDiv);
};


/**
 * Set the opacity of loading 0 bar and then remove it from the dom tree
 */
const unmountDom = (): void => {
  setTimeout(() => {
    loadingBar && (loadingBar.style.opacity = '0');
  }, 300);
  setTimeout(() => {
    reset();
  }, 700); // timeout 300ms, fadeout 400ms
};

const start = (): void => {
  if (!outerDiv) {
    reset();
    createComponent();
  }
};

const succeed = (): void => {
  rafId && raf.cancel(rafId);

  if (outerDiv && loadingBar) {
    loadingBar.style.width = '100%';
    unmountDom();
  }
};

const fail = (): void => {
  rafId && raf.cancel(rafId);

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
