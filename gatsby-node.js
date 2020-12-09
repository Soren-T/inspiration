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
  `).then(({  data }) => {    
    data.allAirtable.edges.forEach(edge => {
      const { data: { slug } } = edge.node;
      createPage({
        path: `${slug}`,
        component,
        context: { slug }
      });
    });
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
