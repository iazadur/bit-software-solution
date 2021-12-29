import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
            <div className="relative mb-20">
                <header className="text-gray-100 body-font  mb-4 h-16 bg-cyan-600 fixed top-0 right-0 left-0">
                    <div className="container mx-auto flex flex-wrap py-3 items-center ">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Link href="/" passHref>
                                <span className=' font-bold ml-3 text-3xl cursor-pointer'>Shawarmer</span>
                            </Link>

                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                            <Link href="/" passHref>
                                <a className='mr-5 hover:text-gray-900 font-bold'>Home</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className='mr-5 hover:text-gray-900 font-bold'>Knowlage books</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className='mr-5 hover:text-gray-900 font-bold'>HR</a>
                            </Link>
                        </nav>
                        <button className="flex gap-x-2">
                            <Link href="/signin" passHref>
                                <a className='text-blue-600  px-4 py-1 bg-sky-200 transition-all hover:text-white hover:bg-sky-500 rounded-md text-md font-bold'>Sign in</a>
                            </Link>
                            <Link href="/signup" passHref>
                                <a className='text-blue-600  px-3 py-1 bg-sky-200 transition-all hover:text-white hover:bg-sky-500 rounded-md text-md font-bold'>Sign Up</a>
                            </Link>


                        </button>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;