require("dotenv").config()
const path = require(`path`)
const { AIRTABLE_TABLE_NAME: tableName } = process.env

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const component = path.resolve(
      `./src/templates/blog-post-template.jsx`
    );

    resolve(
      graphql(`
        {
          allAirtable {
            edges {
              node {
                data {
                  slug
                }
              }
            }
          }
        }        
      `)
    ).then(result => {
      if (result.error) {
        reject(result.error);
      }

      result.data.allAirtable.edges.forEach(edge => {
        const { data: { slug } } = edge.node;
        createPage({
          path: `${slug}`,
          component: slash(blogPostTemplate),
          context: {
            slug: slug
          }
        });
      });
    })

  })
}
