import React from "react";
import { graphql } from "gatsby";
import { Home, SiteMetadata } from "../components";
import { Layout } from "../layouts/Layout";

import "typeface-roboto";
import "../styles/index.scss";
import "../styles/tailwind.css";

export default ({ data }) => {
  const { edges: a } = data.articles;
  const cards = a.map(i => i.node.data);

  const { edges: b } = data.tags;
  const tags = b.map(i => i.node.data);

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
    articles: allAirtable (
      filter: {
        table: { eq: "CMS" }
        data: { status: { eq: "Published" } }
      }
    ) {
      edges {
        node {
          data {
            slug
            title
            summary
            PostMarkdown
            tag__from_Tags_
            date
            status
            image {
              url
            }
          }
        }
      }
    }
    tags: allAirtable (
      filter: {
        table: { eq: "Tags" }
      }
    ) {
      edges {
        node {
          data {
            tag
            ID
          }
        }
      }
    }
  }
`;
