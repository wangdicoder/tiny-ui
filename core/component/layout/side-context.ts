import * as React from 'react';

const SideContext = React.createContext({
    addSide: (val: string) => {
    },
    removeSide: (val: string) => {
    },
});

export default SideContext;
