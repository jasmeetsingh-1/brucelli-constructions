import React from 'react';
import "./css/login.css";
import { Field, Form, Formik } from 'formik';

const Login = () => {
  return (
    <div className='loginPage-holder'>
        <section className="loginForm-holder">
            <div className='login-form-logo'>
            </div>
            <Formik>
                {()=>{
                    return <Form className='loginForm'>
                        <div className='loginform-row'>
                            <label htmlFor="loginEmail">Email</label>
                            <Field
                                type="email"
                                placeHolder="Enter your email"
                                name="loginEmail"
                                id="loginEmail"
                            />
                        </div>
                        <div className='loginform-row'>
                            <label htmlFor="loginPassword">Password</label>
                            <Field
                                type="password"
                                placeHolder="Enter your password"
                                name="loginPassword"
                                id="loginPassword"
                            />
                        </div>
                        <div className='loginform-row extraFormButtons'>
                            <section>
                                <label htmlFor="rememberCheckBox">Remember for 30 days</label>
                                <Field
                                    type="checkbox"
                                    name="rememberCheckBox"
                                    id="rememberCheckBox"
                                />
                            </section>
                            <span>Forgot Password?</span>
                        </div>
                        <div className='loginform-row'>
                            <button type="submit">Sign in</button>
                        </div>
                    </Form>
                }}
            </Formik>
        </section>
    </div>
  )
}

export default Login;
