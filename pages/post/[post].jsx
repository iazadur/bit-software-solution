
import React from 'react';
import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';

export async function getServerSideProps(context) {

    const id = `${context.params.post}`
    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MyQuery {
            post(where: {id: {_eq: ${id}}}) {
              id
              title
              desc
              updated_at
              sub_category {
                subCategory
              }
              user {
                username
                email
              }
            }
          }`
    })

    return {
        props: { data }, // will be passed to the page component as props
    }
}
const Name = ({ data }) => {
    console.log(data.post);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12 justify-center">
                    {/* {title}
            {desc}
            { } */}
                    {
                        data.post.map(({ title, desc, id, updated_at, sub_category, user }) => <div className='' key={id}>

                            <div className="p-12 md:w-3/4  flex flex-col items-start">
                                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{sub_category.subCategory}</span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{title}</h2>
                                <p className="leading-relaxed mb-8">{desc}</p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="inline-flex items-center">
                                    <Image width={50} height={50} alt="blog" src="/user.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{user.username}</span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">{user.email}</span>
                                    </span>
                                </a>
                                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none"  viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>{Math.floor(Math.random() * 10) + 1}K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor"  fill="none" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>{Math.floor(Math.random() * 10) + 1}
                                    </span>
                                </div>
                                
                            </div>


                        </div>)
                    }



                </div>
            </div>
        </section>


    );
};

export default Name;