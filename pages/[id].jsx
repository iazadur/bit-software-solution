import React from 'react';
import { useRouter } from 'next/router'
import initializeApollo from '../lib/apollo'
import { gql } from '@apollo/client';

let newDAta = {}
export async function getStaticProps(context) {
    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MyQuery {
            sub_category {
              id
              subCategory
            }
          }`
    })
    let newDAta = { ...data}
    return {
        props: {}, // will be passed to the page component as props
    }
}


export async function getStaticPaths(id) {

    let params = [

    ]
    console.log(newDAta);
    // data.sub_category.map(cat => params.push({ params: { id: cat.subCategory.split(' ').join('').toLowerCase() } }))
    // console.log(params);
    return {
        paths: [
            ...params
        ],
        fallback: true
    };
}


const Categories = () => {

    const router = useRouter()
    const { categorices } = router.query
    console.log(categorices);

    return (
        <div>

        </div>
    );
};

export default Categories;