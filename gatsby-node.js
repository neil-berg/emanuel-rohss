const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allAirtable(
        filter: { table: { eq: "Projects" } }
        sort: { order: ASC, fields: data___project_order }
      ) {
        nodes {
          data {
            slug
            project_title
            press_release {
              url
            }
            description
          }
        }
      }
    }
  `)

  const projects = data.allAirtable.nodes

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].data
    const next = index === 0 ? null : projects[index - 1].data

    actions.createPage({
      path: project.data.slug,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        slug: project.data.slug,
        projectTitle: project.data.project_title,
        pressRelease: project.data.press_release ? project.data.press_release[0].url : '',
        description: project.data.description,
        previous,
        next,
      },
    })
  })
}
