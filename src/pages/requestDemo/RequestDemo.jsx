import React from 'react'
import './RequestDemo.css'
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
            name: '',
            email: '',
            number: '',
            password: '',
            location: '',
            instituteName: '',
            role: '',
            website: '',
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
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex flex-column">
                                <label htmlFor="name">Name</label>
                                <input type="text" 
                                name="name" 
                                id="name" 
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.name && <formik className="touched name"></formik> ? (
                                    <span className='error'>{formik.errors.name}</span>
                                ) : null}
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="email">Email Address</label>
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
                        </div>
                        <div className='d-flex justify-content-between pt-5'>
                            <div className="d-flex flex-column">
                                <label htmlFor="number">Mobile Number</label>
                                <input type="number" 
                                name="number" 
                                id="number" 
                                value={formik.values.number}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.number && <formik className="touched name"></formik> ? (
                                    <span className='error'>{formik.errors.number}</span>
                                ) : null}
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="location">Location</label>
                                <input type="location" 
                                name="location" 
                                id="location" 
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.location && formik.touched.location ? (
                                    <span className='error'>{formik.errors.location}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="mb-2 select">
                            <label htmlFor="select" className="form-label">Select a plan</label>                                        
                            <select className="form-select" aria-label="Default select example"required>
                                <option value="basic" defaultValue={"Basic"} id="select" >Basic</option>
                                <option value="premium" id="select" >Premium</option>
                            </select>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex flex-column">
                                <label htmlFor="institution-name">Institution Name</label>
                                <input type="name" 
                                name="name" 
                                id="institution-name" 
                                value={formik.values.instituteName}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.instituteName && <formik className="touched name"></formik> ? (
                                    <span className='error'>{formik.errors.instituteName}</span>
                                ) : null}
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="role">Your role</label>
                                <input type="text" 
                                name="role" 
                                id="role"
                                placeholder='e.g Principal, IT Administrator...'
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.role && <formik className="touched name"></formik> ? (
                                    <span className='error'>{formik.errors.role}</span>
                                ) : null}
                            </div>                            
                        </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="role">institution Website</label>
                                <input type="text" 
                                name="website" 
                                id="website"
                                value={formik.values.website}
                                onChange={formik.handleChange}
                                />
                                {formik.errors.website && <formik className="touched name"></formik> ? (
                                    <span className='error'>{formik.errors.website}</span>
                                ) : null}
                            </div>                            
                        <div className="d-flex flex-column">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            {formik.errors.message && formik.touched.message ? (
                            <span className='error'>{formik.errors.message}</span>
                            ) : null}
                        </div>
                        <button className="submit btn text-uppercase mt-3" type='submit' disabled={formik.isSubmitting} >
                            {!formik.isSubmitting ? ("Sign Up") : (<Spinner animation="border" variant="light"/>)}
                        </button>
                    </form>
            </div>
        </div>
    </section>
  )
}

export default RequestDemo