import React from 'react'

const Login = (props) => {
    return (

        <div class="h-[100vh] bg-blue-500 w-full py-16 px-4">
            <div class="flex flex-col items-center justify-center">
                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo" /> */}

                <div class="bg-white shadow rounded-2xl lg:w-1/4  md:w-1/3 w-full p-10 mt-16">
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have account? <a href="/" class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign up here</a></p>

                    <div className='my-6'>
                        <label id="email" class="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input aria-labelledby="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div class="mt-6  w-full">
                        <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div class="relative flex items-center justify-center">
                            <input id="pass" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Sign in</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

