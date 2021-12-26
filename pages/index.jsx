import Hero from '../Components/Hero'
import initializeApollo from '../lib/apollo'
import { gql } from '@apollo/client';
import { useState } from 'react';
import Link from 'next/link';
const axios = require('axios');


export default function Home({ post }) {

  let all = []
  post.category?.forEach(category => {
    category.sub_categories.forEach(subCat => {
      all.push(subCat);
    })
  })

  const [sub, setSub] = useState(all)
  const handleSubCategory = (mainCategory) => {
    setSub(mainCategory);
  }



  axios.post("http://localhost:3000/api/hello", all)

  return (
    <>
      <div className="-mt-6">

        <Hero />
        <div className='bg-cover bg-center w-full rounded-3xl md:p-32 text-cyan-900 text-center ' style={{ backgroundImage: `url("/img/hero.png")`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <h1 className='font-extrabold text-6xl'>Shawarmer</h1>
          <p className='my-6'>Shawarmer Knowladge Base</p>
          <div className="flex gap-4 justify-center mt-8">
            <input className='w-1/3 py-4 px-2 border-2 rounded-md transition-all outline-none  focus:border-2 focus:border-gray-300' type="text" placeholder='' />
            <button className='px-6 py-2 bg-cyan-600 rounded-md text-white font-semibold'>Search</button>
          </div>
        </div>
        <div className="container mx-auto flex gap-4 justify-center">
          <button onClick={() => setSub(all)} className="py-2 border-2 border-red-700 rounded-xl px-4 text-black">{"all"}</button>
          {
            post.category.map(({ id, category, sub_categories }) =>
              <button onClick={() => handleSubCategory(sub_categories)} className="py-2 border-2 border-red-700 rounded-xl px-4 text-black" key={id}>{category}</button>
            )
          }
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-x-3">

            {
              sub?.map(({ id, subCategory, posts }) =>
                <Link href={`/${subCategory.split(' ').join('').toLowerCase()}`} passHref className="p-10 shadow-lg rounded-xl text-black" key={id}>

                  <a className='text-black px-32'>
                    <div className="flex justify-between w-full">
                      <h3 className="bg-red-600 rounded-xl px-4 text-white">{posts.length}</h3>
                      <h3 className="text-2xl font-semibold">{subCategory}</h3>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                      <p className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700">Lorem ipsum dolor sit amet.</p>
                      <p className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700">Lorem ipsum dolor sit amet.</p>
                      <p className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700">Lorem ipsum dolor sit amet.</p>
                      <p className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700">Lorem ipsum dolor sit amet.</p>
                      <p className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </a>
                </Link>
              )
            }

          </div>
        </div>

      </div>
    </>
  )
}


export async function getStaticProps(context) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`query MyQuery {
      category {
        id
        category
        sub_categories {
          id
          subCategory
          posts {
            id
            title
            desc
            user {
              id
              username
              updated_at
            }
          }
        }
      }
    }`
  })
  return {
    props: { post: data }

    // will be passed to the page component as props
  }
}