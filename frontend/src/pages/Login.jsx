/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../actions/auth';




const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const Login = (props) => {
    const dispatch = useDispatch()



    const formik = useFormik(
        {
            initialValues: { "username": "", "password": "" },
            // validationSchema: ValidationSchema,
            enableReinitialize: true,
            onSubmit: async (values) => {
                let username = values.username
                let password = values.password
                dispatch(userLogin({ username, password }));
            }
        }
    )


    return (

        <div className="h-[100vh] bg-blue-500 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo" /> */}

                <div className="bg-white shadow rounded-2xl lg:w-1/4  md:w-1/3 w-full p-10 mt-16">
                    <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have account? <Link to="/sign-up/" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign up here</Link></p>

                    <div className='my-6'>
                        <label id="username" className="text-sm font-medium leading-none text-gray-800">
                            Username
                        </label>
                        <input aria-labelledby="username" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={formik.values.username} onChange={formik.handleChange} name='username' />
                    </div>
                    <div className="mt-6  w-full">
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input id="pass" type="password" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={formik.values.password} onChange={formik.handleChange} name='password' />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full" onClick={formik.handleSubmit}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

