import * as React from "react"
import { Box, Container, Grid, Typography, Paper } from "@material-ui/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout } from "../components"
import { ImageContainer } from "../../elements"

const fabricationTools = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fabrication Tools" />
      <Typography variant="h1" align="center">
        <Box mt={13} mb={6}>
          Fabrication / Installation Tools
        </Box>
      </Typography>

      <Container maxWidth="xs">
        <ImageContainer>
          <Img fluid={data.marbleAdhesive.childImageSharp.fluid} />
        </ImageContainer>
      </Container>

      <Container maxWidth="sm">
        <Typography align="center" paragraph>
          <strong>Marble adhesive</strong>, bonding stone in short time and
          operate in cold condition (-10 C). Could be polished after dried.
          There are 3 colour options:-
        </Typography>
        <Typography align="center">Transparent</Typography>
        <Typography align="center">Black</Typography>
        <Typography align="center">White</Typography>
      </Container>
    </Layout>
  )
}

export default fabricationTools

export const data = graphql`
  query {
    marbleAdhesive: file(relativePath: { eq: "tools/marble-adhesive.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
