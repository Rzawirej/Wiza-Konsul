import React from 'react';
import {Form, Segment } from 'semantic-ui-react'
import KontaTable from './KontaTable/KontaTable';
const ManageKontaView = (props) => {
    const {
        changeIsAdding
    } = props;

    return (
        <>
            
            <KontaTable changeIsAdding={changeIsAdding}/>
        </>
        
    );
};
export default ManageKontaView;