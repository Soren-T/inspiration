import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import { Feature, SiteMetadata } from "../components";
import { useModal } from "../context";
import { Layout } from "../layouts/Layout";

export default (props) => {
  const { data, location: { state} } = props;
  const navigation = state && state.navigation || null;
  const {
    airtable: {
      title,
      author,
      image,
      PostMarkdown
    }
  } = data;
  const { modal } = useModal();

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
              <Img src={image[0].url} alt={name} />
            </div>
            <div
              className="w-full lg:w-2/5 lg:pl-4"
              dangerouslySetInnerHTML={{
                __html: unified()
                  .use(markdown)
                  .use(html)
                  .processSync(post.PostMarkdown)
              }} />
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
