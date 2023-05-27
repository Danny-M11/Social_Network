import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import cls from './Login.module.css';
import { login } from '../../redux/authReducer';

const initialValues = {
    email: '',
    password: '',
    rememberMe: null
}

const validate = values => {
    let errors = {}

    if (!values.email) {
        errors.email = 'Required!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'min length of password: 5 symbols'
    } else if (values.password.length > 20) {
        errors.password = 'max length of password: 20 symbols'
    }

    return errors
};


const LoginForm = (props) => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            let rememberMe = false
            if (!values.rememberMe === null) {rememberMe = true}
            props.login(values.email, values.password, rememberMe) //чек-бокс возвращает в качестве ответа массив со значением он или ничего. Если в массиве лежит значенике - значит в запрос передавать true, если нет, значит false
        },
        validate
    })
    
    if (props.isAuth) { return <Navigate to='/profile' /> }

    return (
        <form onSubmit={formik.handleSubmit} className={cls.loginForm}>
            <h1>Login</h1>
                <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='email'
                    className={cls.loginForm__field}
                />
                {formik.touched.email && formik.errors.email ? <span className={cls.error}>{formik.errors.email}</span> : null}

                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder='password'
                    className={cls.loginForm__field}
                />
                {formik.touched.password && formik.errors.password ? <span className={cls.error}>{formik.errors.password}</span> : null}

                <input
                    type="checkbox"
                    name="rememberMe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {props.authErrorMessage 
                ? <div className={cls.error}>{props.authErrorMessage}</div> 
                : null
                }
            <button type="submit">sub</button>
        </form>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authErrorMessage: state.auth.authErrorMessage
    }
}

const Login = connect(mapStateToProps, {login}) (LoginForm)

export default Login