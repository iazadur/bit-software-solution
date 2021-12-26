
import React from 'react';
import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';

export async function getServerSideProps(context) {
    console.log(context.params)
    console.log(context.query)
    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MyQuery {
            sub_category(where: {subCategory: {_eq: "education"}}) {
              id
              subCategory
              posts {
                id
                title
                desc
              }
            }
          }`
    })
    return {
        props: {}, // will be passed to the page component as props
    }
}
const Name = () => {
    return (
        <div>

        </div>
    );
};

export default Name;