import React from 'react';
import {Search, Segment } from 'semantic-ui-react'
import KontaTable from './KontaTable/KontaTable';
const ManageKontaView = (props) => {
    const {
        changeIsAdding
    } = props;

    return (
        <>
            <Search/>
            <KontaTable changeIsAdding={changeIsAdding}/>
        </>
        
    );
};
export default ManageKontaView;