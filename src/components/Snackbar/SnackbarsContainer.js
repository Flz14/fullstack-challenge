import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSnackbarById, removeSnackbar } from '../../reducers/messages.reducer';
import Snackbar from './Snackbar';

const SnackbarsContainer = () => {

    const snackbar = useSelector(state=>state.messages.snackbar);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(snackbar.length>1){
            dispatch(removeSnackbar(1))
        };
    },[snackbar]);


    return (
        snackbar.map((snackbar, index)=>
            <Snackbar text={snackbar.text} key={snackbar.id} type={snackbar.type} hideSnackbar={()=>dispatch(deleteSnackbarById(snackbar.id))}/>
            )
    )
}

export default SnackbarsContainer
