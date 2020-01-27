import React from 'react';
import KontaForm from '../KontaForm/KontaForm';
import ManageKonta from '../ManageKonta/ManageKonta';
const WorkPlaceView = (props) => {
    const {
        isAdding,
        changeIsAdding
    } = props;

    return (
        <>
        
            {isAdding ? <KontaForm changeIsAdding={changeIsAdding}/> : <ManageKonta changeIsAdding={changeIsAdding}/>}
        </>
        
    );
    
};
export default WorkPlaceView;