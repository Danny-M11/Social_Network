import React from 'react';
import cls from './AddPostForm.module.css'
import { useFormik } from 'formik';

let AddPostForm = (props) => {

    const onSubmit = values => {
        props.addPost(values.postText);
    }
    const formik = useFormik({
        initialValues: {
            postText: ''
        },
        onSubmit
    })

    return (
        <form onSubmit={formik.handleSubmit} className={cls.addPostForm__wrapper}>
            <textarea 
                type="text" 
                name="postText"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postText}
                placeholder="add post"
                className={cls.addPostForm__textarea}
                cols="30" 
                rows="5"
            />
            <button type="submit" className={cls.addPostForm__button}>post</button>
        </form>
    )
}

export default AddPostForm