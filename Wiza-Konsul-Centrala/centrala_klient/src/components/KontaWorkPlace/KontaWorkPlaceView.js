import React from 'react';
import KontaForm from '../KontaForm/KontaForm';
import ManageKonta from '../ManageKonta/ManageKonta';
const KontaWorkPlaceView = (props) => {
    const {
        isAdding,
        changeIsAdding,
        actualLogin
    } = props;

    return (
        <>
        
            {isAdding ? <KontaForm changeIsAdding={changeIsAdding} actualLogin={actualLogin}/> : <ManageKonta changeIsAdding={changeIsAdding}/>}
        </>
        
    );
    
};
export default KontaWorkPlaceView;