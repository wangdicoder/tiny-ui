import Modal from './modal';
import { ModalProvider, useModal } from './modal-context';
import type { ModalProviderProps, UseModalReturn } from './modal-context';

type ModalComponent = typeof Modal & {
  Provider: typeof ModalProvider;
  useModal: typeof useModal;
};

const ModalWithContext = Modal as ModalComponent;
ModalWithContext.Provider = ModalProvider;
ModalWithContext.useModal = useModal;

export default ModalWithContext;
export type { ModalProviderProps, UseModalReturn };
