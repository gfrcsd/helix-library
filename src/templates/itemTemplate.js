import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Heading from "../components/heading"
import Disclaimer from "../components/disclaimer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faFile } from '@fortawesome/pro-duotone-svg-icons'

export default function Template({data}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, fields } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.name} />
            <Heading title={frontmatter.name} subtitle={fields.collection.charAt(0).toUpperCase() + fields.collection.slice(1, -1)} color="light" size="normal"/>
            <Section>
                <div className="columns is-centered">
                    <div className="column is-5" style={{maxHeight: "450px"}}>
                        <Img style={{ maxHeight: "100%" }} imgStyle={{ objectFit: "contain" }} fluid={frontmatter.image.childImageSharp.fluid}/>
                    </div>
                    <div className="column is-5">
                        <p>Based on</p>
                        <h2 className="title is-size-5-mobile">{frontmatter.config != null && frontmatter.config} {frontmatter.brand}&#174; {frontmatter.model != null && frontmatter.model}</h2>
                        <div class="field is-grouped is-grouped-multiline">
                            {frontmatter.instrument != null &&
                                <div className="control">
                                    <div class="tags has-addons">
                                        <span className="tag is-dark">Instrument</span>
                                        <span className="tag is-info">{frontmatter.instrument}</span>
                                    </div>
                                </div>
                            }
                            {frontmatter.type != null &&
                                <div className="control">
                                    <div class="tags has-addons">
                                        <span className="tag is-dark">Type</span>
                                        <span className="tag is-info">{frontmatter.type}</span>
                                    </div>
                                </div>
                            }
                            {frontmatter.channel != null &&
                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-dark">Channel</span>
                                {frontmatter.channel != null && frontmatter.channel.map((channel) => {
                                    return (
                                        <span className="tag is-danger">{channel}</span>
                                    )
                                })}
                                </div>
                            </div>
                            }
                            <div className="control">
                                <div class="tags has-addons">
                                    <span className="tag is-dark">Available since</span>
                                    <span className="tag is-success">{frontmatter.update}</span>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                        {frontmatter.url.length > 0 &&
                            <a href={frontmatter.url} className="button item-url">
                                <span>More Info</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faExternalLink} fixedWidth />
                                </span>
                            </a>
                        }
                        {frontmatter.manual.length > 0 &&
                            <a href={frontmatter.manual} className="button item-url">
                                <span>Manual</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faFile} fixedWidth />
                                </span>
                            </a>
                        }
                        </div>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-10">
                    {html != null &&
                        <div class="content">
                            <div dangerouslySetInnerHTML={{ __html: html }}></div>
                        </div>
                    }
                    </div>
                </div>
            </Section>
            <Disclaimer/>
        </Layout>
        )
    }
    export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                brand
                instrument
                config
                channel
                path
                model
                url
                manual
                name
                type
                update
                image {
                    childImageSharp {
                        fluid(maxHeight: 450) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
            fields {
                collection
            }
        }
    }
    `