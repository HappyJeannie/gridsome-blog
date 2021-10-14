// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const experienceData = await graphql(`{
      allStrapiExperience {
        edges {
          node {
            id
            title
            subtitle
          }
        }
      }
    }`)
    experienceData.data.allStrapiExperience.edges.forEach(({ node }) => {
      createPage({
        path: `/journal/${node.id}`,
        component: './src/templates/journalDetail.vue',
        context: {
          id: node.id
        }
      })
    })
    const projectData  = await graphql(`{
      allStrapiProject {
        edges {
          node {
            id
            title
          }
        }
      }
    }`)
    projectData.data.allStrapiProject.edges.forEach(({ node }) => {
      createPage({
        path: `/project/${node.id}`,
        component: './src/templates/projectDetail.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
