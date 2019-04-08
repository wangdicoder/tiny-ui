import React from 'react';
import FormStore from './form-store';

export default (Component: React.FunctionComponent) => {
    const formStore = new FormStore();

    return (props: any) => {
        return <Component {...props} form={formStore}/>;
    };
};
