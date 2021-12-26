// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';

export default async function handler(req, res) {
    const subCAt = req.query.cat

    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MyQuery {
            sub_category(where: {subCategory: {_eq: ${req.query.cat}}}) {
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
    console.log(req.url);
    console.log(req.query.cat);
    console.log(req.body);
    // console.log(data);
    res.status(200).json({ data })
}
