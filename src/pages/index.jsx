import React from "react"
import { graphql } from "gatsby"
import { Cards, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  const { edges: posts } = data.allAirtable;

  return (
    <Layout>
      <SiteMetadata
        title="Travel destinations"
        description="Check the most popular travel destinations in Europe."
      />

      <Cards nodes={posts} />
    </Layout>
  )
}

export const query = graphql`
  query contentQuery {
    allAirtable {
      edges {
        node {
          data {
            slug
            title
            summary
            PostMarkdown
            date
            image {
              url
            }
          }
        }
      }
    }
  }
`
