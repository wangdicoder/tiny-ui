import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

// --- Reducer ---

type ModalState = Record<string, boolean>;

type ModalAction =
  | { type: 'SHOW'; id: string }
  | { type: 'HIDE'; id: string }
  | { type: 'TOGGLE'; id: string }
  | { type: 'PURGE' };

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'SHOW':
      return state[action.id] === true ? state : { ...state, [action.id]: true };
    case 'HIDE':
      return state[action.id] === false ? state : { ...state, [action.id]: false };
    case 'TOGGLE':
      return { ...state, [action.id]: !state[action.id] };
    case 'PURGE':
      return {};
    default:
      return state;
  }
}

// --- Context ---

interface ModalContextValue {
  modals: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}

const ModalContext = createContext<ModalContextValue | null>(null);

// --- Provider ---

interface ModalProviderProps {
  modals?: ModalState;
  dispatch?: React.Dispatch<ModalAction>;
  children: React.ReactNode;
}

function ModalProvider({ modals: controlledModals, dispatch: controlledDispatch, children }: ModalProviderProps) {
  const [internalModals, internalDispatch] = useReducer(modalReducer, {});

  const modals = controlledModals ?? internalModals;
  const dispatch = controlledDispatch ?? internalDispatch;

  const value = useMemo(() => ({ modals, dispatch }), [modals, dispatch]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

// --- Hook ---

interface UseModalReturn {
  visible: boolean;
  show: () => void;
  close: () => void;
  toggle: () => void;
}

function useModal(id: string): UseModalReturn {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a <Modal.Provider>');
  }

  const { modals, dispatch } = ctx;
  const visible = !!modals[id];

  const show = useCallback(() => dispatch({ type: 'SHOW', id }), [dispatch, id]);
  const close = useCallback(() => dispatch({ type: 'HIDE', id }), [dispatch, id]);
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE', id }), [dispatch, id]);

  return useMemo(() => ({ visible, show, close, toggle }), [visible, show, close, toggle]);
}

export { ModalProvider, useModal, modalReducer };
export type { ModalState, ModalAction, ModalProviderProps, UseModalReturn };
