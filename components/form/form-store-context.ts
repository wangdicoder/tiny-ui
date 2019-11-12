import React from 'react';
import FormStore from './form-store';

const FormStoreContext = React.createContext<FormStore | undefined>(undefined);

export default FormStoreContext;
