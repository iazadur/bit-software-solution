import initializeApollo from '../../lib/apollo'
import { gql } from '@apollo/client';

export default async function handler(req, res) {
    const client = initializeApollo();
    const { data } = await client.query({
        query: gql`query MQuery {
          post {
            id
            title
            desc
            updated_at
            sub_category {
              subCategory
            }
          }
        }
        `
      })
    res.status(200).json({data})
  }
  