import Hero from '../Components/Hero'
import initializeApollo from '../lib/apollo'
import { gql } from '@apollo/client';
import { useState } from 'react';
import Link from 'next/link';
const axios = require('axios');


export default function Home({ post }) {
  const [search, setSearch] = useState([])

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



  const handleSearch = (se) => {
    console.log(se);
    axios.get("https://new-iazadur.vercel.app/api/posts")
      .then(res => {
        if (se === '') {
          setSearch(null)
        } else {

          const result = res.data.data.post.filter(item => item.title.toLowerCase().includes(se.toLowerCase()))
          setSearch(result);
        }

      })
  }

  console.log(search);
  return (
    <>
      <div className="-mt-6">

        <Hero />
        <div className='bg-cover bg-center w-full rounded-3xl md:p-32 text-cyan-900 text-center ' style={{ backgroundImage: `url("/img/hero.png")`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <h1 className='font-extrabold text-6xl'>Shawarmer</h1>
          <p className='my-6'>Shawarmer Knowladge Base</p>
          <div className="flex gap-4 justify-center mt-8">
            <input onChange={(e) => handleSearch(e.target.value)} className='w-1/3 py-4 px-2 border-2 rounded-md transition-all outline-none  focus:border-2 focus:border-gray-300' type="text" placeholder='' />
            <button className='px-6 py-2 bg-cyan-600 rounded-md text-white font-semibold'>Search</button>
          </div>
        </div>
        {search?.length !== 0 &&

          <div className="container px-5 md:px-40 py-24 mx-auto text-gray-700">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {search?.map(({ title, desc, sub_category, updated_at, id }) =>

                <div key={id} className="py-8 flex flex-wrap md:flex-nowrap shadow-lg px-6">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">{sub_category.subCategory}</span>
                    <span className="mt-1 text-gray-500 text-sm">{updated_at.split("T")[0]}</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                    <p className="leading-relaxed">{desc}</p>
                    <Link href={`/post/${id}`} passHref>
                      <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none" >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
        <div className="container mx-auto flex gap-4 justify-center">
          <button onClick={() => setSub(all)} className="py-2 border-2 border-red-700 rounded-xl px-4 text-black">{"all"}</button>
          {
            post.category.map(({ id, category, sub_categories }) =>
              <button onClick={() => handleSubCategory(sub_categories)} className="py-2 border-2 border-red-700 rounded-xl px-4 text-black" key={id}>{category}</button>
            )
          }
        </div>
        <div className="container mx-auto my-5">
          <div className="grid grid-cols-3 gap-6">

            {
              sub?.map(({ id, subCategory, posts }) =>
                <div className="p-1 shadow-lg rounded-xl text-black  px-2 bg-white py-6" key={id}>


                  <div className="flex justify-between w-full px-5">
                    <h3 className="bg-red-600 rounded-xl px-4 text-white">{posts.length}</h3>
                    <h3 className="text-2xl font-semibold">{subCategory}</h3>
                  </div>

                  <div className="flex flex-col justify-center gap-y-3 my-5">
                    {
                      posts.slice(0, 5).map(({ id, title }) => <Link href={`/post/${id}`} key={id} passHref ><a className="px-4 py-1 shadow-lg rounded-xl font-semibold text-slate-700 hover:text-white hover:bg-red-600 transition-all">{title.slice(0, 30)}...</a></Link>)
                    }

                  </div>
                  <div className="flex justify-end">
                    {posts.length > 5 && <Link href={`/sub/${id}`} passHref >
                      <a className=' border-2 border-red-600 px-3 py-1 rounded-xl hover:bg-red-600 hover:text-white text-xl font-semibold transition-all'>More</a>
                    </Link>}
                  </div>

                </div>
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