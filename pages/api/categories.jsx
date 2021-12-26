// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';

export default async function handler(req, res) {
    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MyQuery {
        category {
          id
          category
          
        }
      }`
    })
    console.log(req.body);
    console.log(data);
    res.status(200).json({data})
}
