import * as React from "react"
import { Layout, Hero, MainCTA, SEO } from "../components"
import { Container, Typography, Grid } from "@material-ui/core"
import { graphql } from "gatsby"
import { ContainterMdMt, H2Title } from "../../elements"

const Homepage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Supply Stones Slab &amp; Fabrication Tools"
        subtitle="To: Stone Factory | Stone Mason | Stone Fabricator"
        buttonText="Explore"
        imageSource={data.wideAngleFactory.childImageSharp.fluid}
      />
      <H2Title>Stone Slab Distributor</H2Title>
      <Container maxWidth="sm">
        <Typography paragraph>
          {`We distribute and supply the following stone material & tools to the stone factory, stonemason, and stone fabricator in Malaysia.`}
          <ul>
            <li>
              Natural Stone -{" "}
              <Typography color="primary" display="inline">
                Granite
              </Typography>
              , {` `}
              <Typography color="primary" display="inline">
                Marble
              </Typography>
            </li>
            <li>
              Engineered Stone -{" "}
              <Typography color="primary" display="inline">
                Quartz Stone
              </Typography>
              ,{" "}
              <Typography color="primary" display="inline">
                Porcelain Slab
              </Typography>
            </li>
            <li>Fabrication Tools - Polisher, Marble Glue</li>
            <li>Machines Tools - Cutter Blade</li>
          </ul>
        </Typography>
        <Typography paragraph>
          {`With more than 800 stone slabs ready-stock in our Klang Valley's warehouse.
          Check out factory video to see our ready-stock stone material.`}
        </Typography>
        <Typography component="p" variant="h6">
          {`Grow Your Stone Business With Us`}
        </Typography>
      </Container>

      <ContainterMdMt>
        <H2Title>Warehouse</H2Title>
        <Grid container justify="center">
          <iframe
            title="quartz stone slab warehouse walkthrough"
            style={{
              position: `relative`,
              width: `100%`,
              height: `500px`,
            }}
            src="https://www.youtube.com/embed/n_aPfgbuSDA"
            scrolling="no"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullFcreen
          ></iframe>{" "}
        </Grid>
      </ContainterMdMt>

      <ContainterMdMt>
        <MainCTA />
      </ContainterMdMt>
    </Layout>
  )
}

export default Homepage

export const data = graphql`
  query {
    wideAngleFactory: file(relativePath: { eq: "wide-angle-factory.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
