/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if(result.errors){
                reject(result.errors)
            }

            return result
        })
    )
})

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const generateProductPages = makeRequest(graphql, `
        {
            allStrapiProduct {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allStrapiProduct.edges.forEach(({node}) => {
            createPage({
                path: `/products/${node.slug}`,
                component: path.resolve(`src/templates/product.js`),
                context: {
                    id: node.id
                }
            })
        })
        result.data.allStrapiProduct.edges.slice(3,5).map(({node}) => {
            createPage({
                path: `/pickup_delivery/${node.slug}`,
                component: path.resolve(`src/templates/pickup_delivery.js`),
                context: {
                    id: node.id
                }
            })
        })
        
    })

    return Promise.all([generateProductPages])
}



exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
    createResolvers({
      StrapiPageContentArticleGallery: {
        imageFile: {
          type: `File`,
          resolve(source, args, context, info) {
            return createRemoteFileNode({
              url: `${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
}