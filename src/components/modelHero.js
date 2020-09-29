import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

export default function ModelHero({title, subtitle, size, color}) {
    const data = useStaticQuery(graphql`
        query ModelHeroQuery {
            ampsBanner: file(relativePath: {eq: "amps.jpg"}){
                childImageSharp{
                    fluid(jpegQuality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cabsBanner: file(relativePath: {eq: "cabs.jpg"}){
                childImageSharp{
                    fluid(jpegQuality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            effectsBanner: file(relativePath: {eq: "effects.jpg"}){
                childImageSharp{
                    fluid(jpegQuality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            micsBanner: file(relativePath: {eq: "mics.jpg"}){
                childImageSharp{
                    fluid(jpegQuality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    var bannerImage

    if (title === "Amps"){
        bannerImage = data.ampsBanner.childImageSharp.fluid 
    } else if (title === "Cabs"){
        bannerImage = data.cabsBanner.childImageSharp.fluid 
    } else if (title === "Effects") {
        bannerImage = data.effectsBanner.childImageSharp.fluid 
    } else if (title === "Mics") {
        bannerImage = data.micsBanner.childImageSharp.fluid 
    }

    return (
        <BackgroundImage fluid={bannerImage} className={title + '-hero model-hero hero is-' + size +' is-' + color + ' is-bold'}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-10">
                            <h1 className="title  has-text-weight-normal is-size-4-mobile">{ title }</h1>
                            { subtitle != null && <h2 className="subtitle has-text-weight-light is-size-5-mobile"> {subtitle} </h2>}
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}