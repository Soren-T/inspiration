import React from "react";
import { graphql } from "gatsby";
import { Home, SiteMetadata } from "../components";
import { Layout } from "../layouts/Layout";

export default ({ data }) => {
  const { edges: items } = data.allAirtable;
  const flattened = items.map(p => p.node.data);
  const cards = flattened.filter(i => i.slug);
  const tags = flattened.filter(i => i.tag);

  return (
    <Layout>
      <SiteMetadata
        title="A DnD Blog"
        description="DnD articles that will give you inspiration for you next adventure"
      />
      <Home cards={cards} tags={tags} />
    </Layout>
  )
}

export const query = graphql`
  query contentQuery {
    allAirtable {
      edges {
        node {
          data {
            tag
            ID
            slug
            title
            summary
            PostMarkdown
            tag__from_Tags_
            date
            image {
              url
            }
          }
        }
      }
    }
  }
`;
