const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    
    if (_.get(node, "internal.type") === `MarkdownRemark`) {
        
        const parent = getNode(_.get(node, "parent"));
        
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
    const modelTemplate = path.resolve(`src/templates/modelTemplate.js`)
    const result = await graphql(`
    {
        ampsPages: allMarkdownRemark(filter: {fields: {collection: {eq: "amps"}}}, sort: {fields: frontmatter___name}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                    }
                }
                next {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
                previous {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
            }
        }
        cabsPages: allMarkdownRemark(filter: {fields: {collection: {eq: "cabs"}}}, sort: {fields: frontmatter___name}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                    }
                }
                next {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
                previous {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
            }
        }
        effectsPages: allMarkdownRemark(filter: {fields: {collection: {eq: "effects"}}}, sort: {fields: frontmatter___name}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                    }
                }
                next {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
                previous {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
            }
        }
        micsPages: allMarkdownRemark(filter: {fields: {collection: {eq: "mics"}}}, sort: {fields: frontmatter___name}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                    }
                }
                next {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
                    }
                }
                previous {
                    frontmatter {
                        path
                        model
                        name
                        brand
                    }
                    fields {
                        collection
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
                next {
                    frontmatter {
                        path
                        title
                    }
                }
                previous {
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }
    `)
    
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    
    result.data.ampsPages.edges.forEach(({ node, previous, next }) => {
        createPage({
            path: node.frontmatter.path,
            component: modelTemplate,
            context: {
                previous,
                next
            },
        })
    })

    result.data.cabsPages.edges.forEach(({ node, previous, next }) => {
        createPage({
            path: node.frontmatter.path,
            component: modelTemplate,
            context: {
                previous,
                next
            },
        })
    })

    result.data.effectsPages.edges.forEach(({ node, previous, next }) => {
        createPage({
            path: node.frontmatter.path,
            component: modelTemplate,
            context: {
                previous,
                next
            },
        })
    })

    result.data.micsPages.edges.forEach(({ node, previous, next }) => {
        createPage({
            path: node.frontmatter.path,
            component: modelTemplate,
            context: {
                previous,
                next
            },
        })
    })
    
    result.data.allMdx.edges.forEach(({ node, previous, next }) => {
        createPage({
            path: node.frontmatter.path,
            component: require.resolve('./src/templates/releaseNoteTemplate.js'),
            context: {
                pathSlug: node.frontmatter.path,
                previous,
                next
            },
        });
    });
}