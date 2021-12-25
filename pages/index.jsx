import Hero from '../Components/Hero'
import initializeApollo from '../lib/apollo'
import { gql } from '@apollo/client';


export default function Home({ post }) {
  console.log(post.category);
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
          {
            post.category.map(({ id, category }) =>
              <button className="py-2 border-2 border-red-700 rounded-xl px-4 text-black" key={id}>{category}</button>
            )
          }
        </div>

      </div>
    </>
  )
}


export async function getStaticProps(context) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`query fetchingPost {
      category {
        id
        category
      }
    }`
  })
  console.log(data);
  return {
    props: { post: data }

    // will be passed to the page component as props
  }
}