import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';


const ErrorForm = () => {
    const errorMessage = useSelector(selectErrorMessage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage)
            dispatch(clearError())
    }
    },[errorMessage, dispatch])
    
    return <ToastContainer position='top-right' autoClose={3000} />
}

export default ErrorForm