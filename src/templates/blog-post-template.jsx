import React from "react";
import { graphql } from "gatsby";
import { Remarkable } from "remarkable";

import { SiteMetadata } from "../components";
import { Layout } from "../layouts/Layout";

export default (props) => {
  const {
    airtable: { 
      data: {
        title,
        author,
        image,
        summary,
        PostMarkdown
      }
    }
  } = props.data;
  const parser = new Remarkable();
  const html = parser.render(PostMarkdown);

  return (
    <Layout signup={false} share={true}>
      <SiteMetadata title={title} description={summary} image={image[0].url} />
      <article>
        <div className="container py-8">
          <div className="blog-wrapper p-8">
            <h1 className="text-2xl lg:text-3xl text-blue-500 font-bold leading-tight">
              {title}
            </h1>
            <p className="text-base lg:text-lg text-blue-800 font-medium mb-4">
              {author}
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <img src={image[0].url} alt={title} />
            </div>
            <div
              className="blog-wrapper p-8"
              dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    airtable(
      data: {
        slug: { eq: $slug }
      }
    ) {
      data {
        title
        summary
        author
        PostMarkdown
        date
        image {
          url
        }
      }
    }
  }
`
