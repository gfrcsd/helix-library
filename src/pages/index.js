import React from "react"
import Particles from "react-tsparticles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Disclaimer from "../components/disclaimer"
import Numbers from "../components/numbers"
import Latest from "../components/latest"
import "../sass/style.sass"

const IndexPage = () => {
  const particlesOptions = {
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 30,
    particles: {
      color: {
        value: "#000000",
      },
      links: {
        color: {
          value: "#000000",
        },
        distance: 150,
        enable: true,
        opacity: 0.05,
      },
      move: {
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: true,
        speed: 2,
      },
      number: {
        density: {
          enable: true,
        },
        value: 85,
      },
      opacity: {
        value: 0.15,
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 3,
        },
      },
    },
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="hero is-medium has-particles">
        <Particles
          id="tsparticles"
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -10,
          }}
        />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10 has-text-centered">
                <h1 className="title has-text-weight-normal is-size-4-mobile">
                  Welcome to Helix library
                </h1>
                <h2 className="subtitle has-text-weight-light is-size-5-mobile">
                  A trove of information about the Helix product line by Line 6®
                </h2>
              </div>
            </div>
            <div className="columns is-centered mt-6">
              <div className="column is-8">
                <Numbers />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section>
        <Latest />
      </Section>
      <Disclaimer />
    </Layout>
  )
}

export default IndexPage
