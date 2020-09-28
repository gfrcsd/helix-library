import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmpGuitar, faSpeaker, faMicrophoneStand, faWaveformPath } from '@fortawesome/pro-duotone-svg-icons'

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
                <Link to="/models/amps" className="has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faAmpGuitar} size="4x" />
                    <p className="title has-text-weight-normal">{data.ampsCount.totalCount}</p>
                    <p className="heading is-size-6">Amps</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/cabs" className="has-text-dark">
                    <FontAwesomeIcon icon={faSpeaker} className="mb-3" rotation={90} size="4x" />
                    <p className="title has-text-weight-normal">{data.cabsCount.totalCount}</p>
                    <p className="heading is-size-6">Cabs</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/effects" className="has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faWaveformPath} size="4x" />
                    <p className="title has-text-weight-normal">{data.effectsCount.totalCount}</p>
                    <p className="heading is-size-6">Effects</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/mics" className="has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faMicrophoneStand} size="4x" />
                    <p className="title has-text-weight-normal">{data.micsCount.totalCount}</p>
                    <p className="heading is-size-6">Mics</p>
                </Link>
            </div>
        </div>
    )
}