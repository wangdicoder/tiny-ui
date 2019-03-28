import * as React from 'react';

const SiderContext = React.createContext({
    addSider: (val: string) => {
    },
    removeSider: (val: string) => {
    },
});

export default SiderContext;
