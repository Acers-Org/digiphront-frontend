import loginImg from '../../assets/login-img.png';
import Icon from '../../assets/icon.svg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import API from '../../utils/Backend'
//import { useState, useEffect } from 'react';
//import useContextGetter from "../../hooks/useContextGetter";
import AppContext from '../../store/appContext';

function Login() {
    //const login = useContextGetter();
    const login = AppContext.Consumer;
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email address is required'),
        password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password is required!'),
        rememberMe: Yup.string()
    })
    const handleSignin = async (values) => {
        try {
            const res = await API.post('/login', values)
            console.log(res.data.data)
            console.log(res.data.message)
            console.log(res.data.success)
            if (res.data.success === 1) {
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.data.user))
                navigate('/studentDashboard')
                login(res.data.data)
            }
            
        } catch (e) {
            if (e.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(e.response.data);
                console.log(e.response.status);
            }
        }
    }    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            user: 'Teacher',
        },
        onSubmit: handleSignin,
        validationSchema,
    })

  return (
    <section className='login'>
            <div className="row d-flex justify-content-center login">
                <div className="col-md-6 col-sm-12 img-container">
                    <img src={loginImg} alt="Login" className='img-fluid login-img'/>
                    <div className="img-text row">
                        <img src={Icon} alt="EduClan Icon" className='img-fluid w-25' />
                        <h1 className='text-white'>Welcome to <span className='edu'>Edu</span><span className='clan'>Clan</span> </h1>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 m-auto">
                    <form action="" className='form w-75' onSubmit={formik.handleSubmit}>
                        <div className='d-flex flex-column'>
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <span className='error'>{formik.errors.email}</span>
                            ) : null}
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            name="password" 
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            />
                            {formik.errors.password && formik.touched.password ? (
                            <span className='error'>{formik.errors.password}</span>
                            ) : null}
                        </div>
                        <button className="btn text-uppercase btn-block btn-primary w-100 mt-3" type='submit' disabled={formik.isSubmitting} >
                            {!formik.isSubmitting ? ("Sign Up") : (<Spinner animation="border" variant="light"/>)}
                        </button>

                        <div className="d-flex justify-content-between mt-3 align">
                            <div className="checkbox">
                                <input type="checkbox" 
                                name="rememberMe" 
                                id="rememberMe" 
                                value={formik.values.rememberMe}
                                onChange={formik.handleChange} />
                                <label htmlFor="rememberMe"> Remember me</label>
                            </div>
                            <h5> <Link to="/" className='text-capitalize'> Forgot password?</Link> </h5>
                        </div>
                    </form>
                </div>
            </div>        
    </section>
  )
}

export default Login