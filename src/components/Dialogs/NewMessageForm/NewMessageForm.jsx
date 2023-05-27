import React from 'react';
import cls from './NewMessageForm.module.css';
import { useFormik } from 'formik';

const NewMessageForm = (props) => {
    
    let initialValues = {
        messageInputValue: ''
    }

    let onSubmit = values => {
        props.addMessage(values.messageInputValue)
    }
    
    let formik = useFormik({
        initialValues,
        onSubmit
    })

    return (
        <form onSubmit={formik.handleSubmit} className={cls.newMessageForm__wrapper}>
            <input 
                type="text"
                name="messageInputValue"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.messageInputValue}
                placeholder="add message" 
                className={cls.newMessageForm__input}
            />
            <button type="submit" className={cls.newMessageForm__button}>Send</button>
        </form>
    )
}

export default NewMessageForm