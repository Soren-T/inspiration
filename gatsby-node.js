require("dotenv").config();
const path = require(`path`);
const { AIRTABLE_TABLE_NAME: tableName } = process.env

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const component = path.resolve(
    `./src/templates/blog-post-template.jsx`
  );

  await graphql(`
    {
      allAirtable(
        filter: {
          table: { eq: "CMS" }
        }
      ) {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }        
  `).then((result) => {
    if (result.errors) {
      // handle errors???
      throw result.errors
    }
    const posts = result.data.allAirtable.edges;
    if (posts.length) {
      posts.forEach(edge => {
        const { data: { slug } } = edge.node;
        createPage({
          component,
          path: `${slug}`,
          context: { slug }
        });
      });
    }
  });
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  createPage({
    ...page,
    context: {
      ...page.context,
      tableName,
    },
  })
}
