
import React from 'react';
import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';
import Link from 'next/link';

export async function getServerSideProps(context) {

  const id = `${context.params.name}`
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`query MyQuery {
            sub_category(where: {id: {_eq: ${id} }}) {
              id
              subCategory
              posts {
                id
                title
                desc
                updated_at
              }
            }
          }`
  })

  return {
    props: { data }, // will be passed to the page component as props
  }
}
const Name = ({ data }) => {
  data?.sub_category.forEach(element => {
    console.log(element.subCategory);
  })

  return (
    <div>
      <div className="w-full -mt-4 mb-4">
        {
          data?.sub_category.map(element =>
            <div key={element.id} className="container mx-auto text-slate-900">
              <h1 className='text-black text-5xl font-bold bg-gray-300 mb-4 px-2 rounded-b-md  py-5'>{element.subCategory}</h1>
              <div className="flex flex-col gap-y-5">
                {
                  element.posts.map(({ title, desc, id,updated_at }) =>
                    <Link  key={id} href={`/post/${id}`} passHref>
                      <a>
                        <div className='border border-gray-500 p-4 rounded-md'>
                          <div className="flex flex-col gap-y-2">
                            <p className='text-gray-500 font-semibold'>{`Like: ${Math.floor(Math.random() * 10) + 1} | Dislike: ${Math.floor(Math.random() * 10) + 1} | View ${Math.floor(Math.random() * 10) + 1} | Updated Date: ${updated_at.split("T")[0]}`}</p>
                            
                            <h1 className='text-3xl font-semibold text-black '>{title}</h1>
                            <p className='text-base text-gray-500'>{desc}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  )
                }
              </div>
            </div>

          )}

      </div>

    </div>
  );
};

export default Name;