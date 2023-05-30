import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/auth'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router'



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: { "username": "", "password": "", "code": "" },
            // validationSchema: ValidationSchema,
            enableReinitialize: true,
            onSubmit: async (values) => {
                let username = values.username
                let password = values.password
                let code = values.code
                dispatch(registerUser({ username, password, code }));
                await sleep(1000)
                navigate('/');
            }
        }
    )
    return (
        <div className="h-[100vh] bg-blue-500 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo" /> */}

                <div className="bg-white shadow rounded-2xl lg:w-1/4  md:w-1/3 w-full p-10 mt-16">
                    <p tabindex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Sign up</p>
                    <p tabindex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Already own an account? <Link to="/" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign in here</Link></p>

                    <div className='my-6'>
                        <label id="email" className="text-sm font-medium leading-none text-gray-800">
                            Username
                        </label>
                        <input aria-labelledby="text" type="text" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={formik.values.username} onChange={formik.handleChange} name='username' />
                    </div>
                    <div className="mt-6  w-full">
                        <label for="pass" className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input id="pass" type="password" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" values={formik.values.password} onChange={formik.handleChange} name='password' />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport" />
                            </div>
                        </div>
                    </div>
                    <div className='my-6'>
                        <label id="access" className="text-sm font-medium leading-none text-gray-800">
                            Access Code
                        </label>
                        <input aria-labelledby="text" type="email" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={formik.values.code} onChange={formik.handleChange} name='code' />
                    </div>
                    <div className="mt-8">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full" onClick={formik.handleSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp