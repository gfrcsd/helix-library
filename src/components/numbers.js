import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmpGuitar, faSpeaker, faMicrophoneStand, faWaveformPath } from '@fortawesome/pro-duotone-svg-icons'

export default function Number() {
    const data = useStaticQuery(graphql`
        query numberQuery {
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
        <div className="level is-mobile">
            <div className="level-item has-text-centered">
                <Link to="/models/amps" className="number-link has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faAmpGuitar} size="4x" />
                    <p className="title is-size-4-mobile has-text-weight-normal">{data.ampsCount.totalCount}</p>
                    <p className="heading is-size-6 is-size-7-mobile">Amps</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/cabs" className="number-link has-text-dark">
                    <FontAwesomeIcon icon={faSpeaker} className="mb-3" rotation={90} size="4x" />
                    <p className="title is-size-4-mobile has-text-weight-normal">{data.cabsCount.totalCount}</p>
                    <p className="heading is-size-6 is-size-7-mobile">Cabs</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/effects" className="number-link has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faWaveformPath} size="4x" />
                    <p className="title is-size-4-mobile has-text-weight-normal">{data.effectsCount.totalCount}</p>
                    <p className="heading is-size-6 is-size-7-mobile">Effects</p>
                </Link>
            </div>
            <div className="level-item has-text-centered">
                <Link to="/models/mics" className="number-link has-text-dark">
                    <FontAwesomeIcon className="mb-3" icon={faMicrophoneStand} size="4x" />
                    <p className="title is-size-4-mobile has-text-weight-normal">{data.micsCount.totalCount}</p>
                    <p className="heading is-size-6 is-size-7-mobile">Mics</p>
                </Link>
            </div>
        </div>
    )
}