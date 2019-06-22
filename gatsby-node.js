const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allAirtable(
        filter: { table: { eq: "Projects" } }
        sort: { order: ASC, fields: data___project_order }
      ) {
        nodes {
          data {
            slug
            project_title
          }
        }
      }
    }
  `)

  data.allAirtable.nodes.forEach(project => {
    actions.createPage({
      path: project.data.slug,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        slug: project.data.slug,
        projectTitle: project.data.project_title,
      },
    })
  })
}
