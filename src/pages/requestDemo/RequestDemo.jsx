import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
// import API from '../../utils/Backend'
import useContextGetter from "../../hooks/useContextGetter";
import Messages from '../../components/works/Messages';
import { useState } from 'react';

function RequestDemo() {
    const [messages, setMessages] = useState('')
    // const { login } = useContextGetter();
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email address is required'),
        password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password is required!'),
        rememberMe: Yup.string()
    })
    const handleSignin = async (values) => {
        try {
            // const res = await API.post('/api/login', values)
            // setMessages(res.data.message);
            // console.log(messages)
            // if(res.data.success && res.data.data.user.student.isStudent) {
            //     login(res.data.data)
            //     navigate('/studentDashboard')
            // }
            // if(res.data.success && res.data.data.user.teacher.isTeacher) {
            //         login(res.data.data)
            //         navigate('/teacher_dashboard')
            //     }
            // if(res.data.success && res.data.data.user.admin.isAdmin) {
            //             login(res.data.data)
            //             navigate('/admin_Dashboard')
            //         }
            localStorage.setItem('user', JSON.stringify(values))
            console.log(values)
            navigate('/studentDashboard')
        } catch (e) {
            if (e.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setMessages(e.response.data.message);
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(messages)
                //return <Messages message={e.response.data.message}/>
            }
        }
    }    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            user: {
                student: true,
                admin: false,
                teacher: false
            }
        },
        onSubmit: handleSignin,
        validationSchema,
    })
  return (      
    <section className='request-demo'>
        <div className="container">
            <div className="row">                
                {messages && <Messages messages={messages}/>}
                <div className="header-section d-flex justify-content-between">
                    <h1 className="header">Request a Demo</h1>
                    <button>X</button>
                </div>

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

export default RequestDemo