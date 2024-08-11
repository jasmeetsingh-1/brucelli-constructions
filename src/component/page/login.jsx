import React from 'react';
import "./css/login.css";
import { Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const toastConfig = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    const loginInitialValues = {
        loginEmail:"",
        loginPassword:"",
        rememberCheckBox: false,
    }

    const loginSubmitHandler = (values) =>{
        console.log(values);
        if(!values.loginEmail || !values.loginPassword){
            return  toast.warn("All Fields are mandatory", toastConfig);
        }
        if(values.loginEmail !== "test@gmail.com") return toast.error("Incorrect Email! ", toastConfig);
        if(values.loginPassword !== "Password@123" ) return toast.error("Incorrect Password! ", toastConfig);

        return toast.success("Login Successful!", toastConfig);
    }
  return (
    <div className='loginPage-holder'>
        <section className="loginForm-holder">
            <div className='login-form-logo'>
            </div>
            <Formik
                initialValues={loginInitialValues}
                onSubmit={loginSubmitHandler}
            >
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
        <ToastContainer/>
    </div>
  )
}

export default Login;
