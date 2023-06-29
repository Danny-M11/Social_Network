import React from 'react';
import { useFormik } from 'formik';
import cls from './ProfileDataEdit.module.css';

const ProfileDataEdit = (props) => {
    const initialValues = {
        fullName: props.profileData.fullName,
        lookingForAJob: null,
        lookingForAJobDescription: props.profileData.lookingForAJobDescription,
        aboutMe: props.profileData.aboutMe,
        contacts: {
            facebook: props.profileData.contacts.facebook,
            vk: props.profileData.contacts.vk,
            instagram: props.profileData.contacts.instagram,
            youtube: props.profileData.contacts.youtube,
        }
    }

    const validate = values => {
        let errors = {};

        if (!values.fullName) {
            errors.fullName = 'Required'
        }

        if (!values.lookingForAJobDescription) {
            errors.lookingForAJobDescription = 'Required'
        }

        if (!values.aboutMe) {
            errors.aboutMe = 'Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            let lookingForAJob = false
            if (values.lookingForAJob !== null) { lookingForAJob = true }
            values.lookingForAJob = lookingForAJob
            props.closeEditMode(values)
        },
        validate
    })

    return (
        <form onSubmit={formik.handleSubmit} className={cls.edit_form}>
            <span className={cls.edit_form__item}>
                <span className={cls.edit_form__label}>имя</span>
                <input
                    className={cls.edit_form__input}
                    type="text"
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                />
                {formik.errors.fullName ? <span className={cls.error}>{formik.errors.fullName}</span> : null}

            </span>

            <span className={cls.edit_form__item}>
                <span className={cls.edit_form__label}>в поисках работы</span>
                <input
                    className={`${cls.edit_form__input} ${cls.edit_form__checkbox}`}
                    type="checkbox"
                    name="lookingForAJob"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </span>

            <span className={cls.edit_form__item}>
                <span className={cls.edit_form__label}>в поисках работы</span>
                <input
                    className={cls.edit_form__input}
                    type="text"
                    name="lookingForAJobDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lookingForAJobDescription}
                />
                {formik.errors.lookingForAJobDescription ? <span className={cls.error}>{formik.errors.lookingForAJobDescription}</span> : null}
            </span>

            <span className={cls.edit_form__item}>
                <span className={cls.edit_form__label}>обо мне</span>
                <input
                    className={cls.edit_form__input}
                    type="text"
                    name="aboutMe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.aboutMe}
                />
                {formik.errors.aboutMe ? <span className={cls.error}>{formik.errors.aboutMe}</span> : null}
            </span>

            <div>
                <span>Контакты</span>

                <span className={cls.edit_form__item}>
                    <span className={cls.edit_form__label}>Facebook</span>
                    <input
                        className={cls.edit_form__input}
                        type="text"
                        name="contacts.facebook"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contacts.facebook}
                    />
                </span>

                <span className={cls.edit_form__item}>
                    <span className={cls.edit_form__label}>vk</span>
                    <input
                        className={cls.edit_form__input}
                        type="text"
                        name="contacts.vk"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contacts.vk}
                    />
                </span>

                <span className={cls.edit_form__item}>
                    <span className={cls.edit_form__label}>instagram</span>
                    <input
                        className={cls.edit_form__input}
                        type="text"
                        name="contacts.instagram"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contacts.instagram}
                    />
                </span>

                <span className={cls.edit_form__item}>
                    <span className={cls.edit_form__label}>youtube</span>
                    <input
                        className={cls.edit_form__input}
                        type="text"
                        name="contacts.youtube"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contacts.youtube}
                    />
                </span>
            </div>
            <button type="submit">save</button>
        </form>
    )
}

export default ProfileDataEdit