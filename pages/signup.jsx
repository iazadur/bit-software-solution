import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const signup = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 my-24 mx-auto flex flex-wrap items-center bg-white rounded-xl">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <Image src="/img/login.png" alt='' layout='responsive' width={"1018"} height={"830"} />
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlor="gender" className="leading-7 text-sm text-gray-600">Genden</label>
                            <select id='gender' name='gender' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option disabled="disabled" selected="selected">Select one</option>
                                <option>Female</option>
                                <option>Male</option>
                                <option>Others</option>
                            </select>

                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registration</button>

                        <p className="text-base text-gray-500 mt-3">{`Already have an Account? `}
                            <Link href="/signin" passHref>
                                <a className='text-blue-600 font-semibold '>Login</a>
                            </Link>
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default signup;