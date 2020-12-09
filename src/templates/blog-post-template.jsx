import React from "react";
import { graphql } from "gatsby";
import { Remarkable } from "remarkable";

import { SiteMetadata } from "../components";
import { useModal } from "../context";
import { Layout } from "../layouts/Layout";

export default (props) => {
  const { data, location: { state } } = props;
  const navigation = (state && state.navigation) || null;
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
  } = data;
  const { modal } = useModal();
  const parser = new Remarkable();
  const html = parser.render(PostMarkdown);

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={title} description={summary} image={image[0].url} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 dark:text-blue-400 font-bold leading-tight">
            {title}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 dark:text-blue-500 font-medium mb-4">
            {author}
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <img src={image[0].url} alt={title} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
