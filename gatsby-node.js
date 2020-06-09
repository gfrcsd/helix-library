/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

// You can delete this file if you're not using it

const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    
    if (_.get(node, "internal.type") === `MarkdownRemark`) {
        // Get the parent node
        const parent = getNode(_.get(node, "parent"));
        
        // Create a field on this node for the "collection" of the parent
        // NOTE: This is necessary so we can filter `allMarkdownRemark` by
        // `collection` otherwise there is no way to filter for only markdown
        // documents of type `post`.
        createNodeField({
            node,
            name: "collection",
            value: _.get(parent, "sourceInstanceName")
        });
    }
};

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const itemTemplate = path.resolve(`src/templates/itemTemplate.js`)
    const result = await graphql(`
    {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___path] }
            filter: {fields: {collection: {nin: "manuals"}}
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
        allMdx(sort: {fields: frontmatter___path}) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: itemTemplate,
            context: {}, // additional data can be passed via context
        })
    })

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: require.resolve('./src/templates/releaseNoteTemplate.js'),
            context: {
                pathSlug: node.frontmatter.path,
            },
        });
    });
}