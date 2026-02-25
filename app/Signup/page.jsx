'use client';
import { useFormik } from 'formik';
import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
        .min(3, 'Too short'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, '6+ characters required'),
    confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
});


const Signup = () => {

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            console.log(values);
            // send values to backend
        },
        validationSchema: signupSchema
    });


    return (
        <div className='min-h-screen py-10' style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 75%, #533483 100%)' }}>
            {/* Back to Home Button */}
            <div className="max-w-lg mx-auto mb-4 px-1">
                <Link
                    href="/"
                    className="inline-flex items-center gap-x-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
                >
                    <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </div>
            <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
                {/* Sign Up */}
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h3 id="hs-modal-signup-label" className="block text-2xl font-bold text-gray-800">Sign up</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href="/Components/Login"
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-semibold transition-colors duration-200 hover:text-blue-800"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-white border border-gray-200 text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Sign up with Google
                        </a>

                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>

                        {/* Form */}
                        <form onSubmit={signupForm.handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Form Group - Full Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2 text-gray-800">Full Name</label>
                                    <div className="relative">
                                        <input type="text"
                                            id="name"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.name}
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none outline-none" aria-describedby="name-error" />
                                    </div>
                                    {signupForm.errors.name && signupForm.touched.name && (
                                        <p className="text-xs text-red-600 mt-2" id="name-error">{signupForm.errors.name}</p>
                                    )}
                                </div>
                                {/* End Form Group */}

                                {/* Form Group - Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 text-gray-800">Email address</label>
                                    <div className="relative">
                                        <input type="email"
                                            id="email"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.email}
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none outline-none" aria-describedby="email-error" />
                                    </div>
                                    {signupForm.errors.email && signupForm.touched.email && (
                                        <p className="text-xs text-red-600 mt-2" id="email-error">{signupForm.errors.email}</p>
                                    )}
                                </div>
                                {/* End Form Group */}

                                {/* Form Group - Password */}
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <label htmlFor="password" className="block text-sm mb-2 text-gray-800">Password</label>
                                    </div>
                                    <div className="relative">
                                        <input type="password"
                                            id="password"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.password}
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none outline-none" aria-describedby="password-error" />
                                    </div>
                                    {signupForm.errors.password && signupForm.touched.password && (
                                        <p className="text-xs text-red-600 mt-2" id="password-error">{signupForm.errors.password}</p>
                                    )}
                                </div>
                                {/* End Form Group */}

                                {/* Form Group - Confirm Password */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm mb-2 text-gray-800">Confirm Password</label>
                                    <div className="relative">
                                        <input type="password"
                                            id="confirmPassword"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.confirmPassword}
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none outline-none" aria-describedby="confirm-password-error" />
                                    </div>
                                    {signupForm.errors.confirmPassword && signupForm.touched.confirmPassword && (
                                        <p className="text-xs text-red-600 mt-2" id="confirm-password-error">{signupForm.errors.confirmPassword}</p>
                                    )}
                                </div>
                                {/* End Form Group */}

                                {/* Already have an account link */}
                                <div className="text-center py-1">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{' '}
                                        <Link
                                            href="/Components/Login"
                                            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline underline-offset-2 decoration-2 transition-colors duration-200 focus:outline-none focus:underline"
                                        >
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="checkbox" name="checkbox" type="checkbox" className="shrink-0 size-4 bg-transparent border-gray-300 rounded-sm shadow-2xs text-blue-600 focus:ring-0 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="checkbox" className="text-sm text-gray-800">
                                            I accept the <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">Terms and Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                {/* End Checkbox */}

                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200">Sign up</button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
                {/* End Sign Up */}
            </div>
        </div>
    )
}

export default Signup;