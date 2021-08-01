import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GiAmplitude, GiMicrophone, GiAbstract017 } from "react-icons/gi"
import { RiSpeaker3Fill } from "react-icons/ri"

export default function Number() {
  const data = useStaticQuery(graphql`
    query numberQuery {
      ampsCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "amps" } } }
      ) {
        totalCount
      }
      cabsCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "cabs" } } }
      ) {
        totalCount
      }
      effectsCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "effects" } } }
      ) {
        totalCount
      }
      micsCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "mics" } } }
      ) {
        totalCount
      }
    }
  `)
  return (
    <div className="level is-mobile">
      <div className="level-item has-text-centered">
        <Link to="/models/amps" className="number-link has-text-dark">
          <span className="icon is-large">
            <GiAbstract017
              className="mb-3"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
          <p className="title is-size-4-mobile has-text-weight-normal">
            {data.ampsCount.totalCount}
          </p>
          <p className="heading is-size-6 is-size-7-mobile">Amps</p>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <Link to="/models/cabs" className="number-link has-text-dark">
          <span className="icon is-large">
            <RiSpeaker3Fill
              className="mb-3"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
          <p className="title is-size-4-mobile has-text-weight-normal">
            {data.cabsCount.totalCount}
          </p>
          <p className="heading is-size-6 is-size-7-mobile">Cabs</p>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <Link to="/models/effects" className="number-link has-text-dark">
          <span className="icon is-large">
            <GiAmplitude
              className="mb-3"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
          <p className="title is-size-4-mobile has-text-weight-normal">
            {data.effectsCount.totalCount}
          </p>
          <p className="heading is-size-6 is-size-7-mobile">Effects</p>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <Link to="/models/mics" className="number-link has-text-dark">
          <span className="icon is-large">
            <GiMicrophone
              className="mb-3"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
          <p className="title is-size-4-mobile has-text-weight-normal">
            {data.micsCount.totalCount}
          </p>
          <p className="heading is-size-6 is-size-7-mobile">Mics</p>
        </Link>
      </div>
    </div>
  )
}
