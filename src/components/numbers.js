import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            ampsCount: allMarkdownRemark(filter: {fields: {collection: {eq: "amps"}}}) {
                totalCount
            }
            cabsCount: allMarkdownRemark(filter: {fields: {collection: {eq: "cabs"}}}) {
                totalCount
            }
            effectsCount: allMarkdownRemark(filter: {fields: {collection: {eq: "effects"}}}) {
                totalCount
            }
            micsCount: allMarkdownRemark(filter: {fields: {collection: {eq: "mics"}}}) {
                totalCount
            }
        }
    `)
    return (
        <div className="level">
            <div className="level-item has-text-centered">
                <div>
                    <h3 className="title">{data.ampsCount.totalCount}</h3>
                    <h4 className="heading is-size-5">Amps</h4>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <h3 className="title">{data.cabsCount.totalCount}</h3>
                    <h4 className="heading is-size-5">Cabs</h4>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <h3 className="title">{data.effectsCount.totalCount}</h3>
                    <h4 className="heading is-size-5">Effects</h4>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <h3 className="title">{data.micsCount.totalCount}</h3>
                    <h4 className="heading is-size-5">Mics</h4>
                </div>
            </div>
        </div>
    )
}