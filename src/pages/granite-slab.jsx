import * as React from "react"
import { Layout, Hero, ColourWarning, MainCTA, SEO } from "../components"
import {
  ContainterLgMt,
  ContainterSmMt,
  ContainterMdMt,
  ImageContainer,
  H2Title,
} from "../../elements"
import { Grid, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const graniteSlab = ({ data }) => {
  return (
    <Layout>
      <SEO title="Granite Slab" />
      <Hero
        title="Granite Slab"
        subtitle="Supply Granite Slab To Stone Factory &amp; Fabricator"
        buttonText="Explore"
        imageSource={data.bluepearlHero.childImageSharp.fluid}
      />
      <ContainterLgMt>
        <H2Title>Colour Options</H2Title>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.file.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Black Galaxy</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.bluePearl.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Blue Pearl</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.bourbonGrey.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Bourbon Grey</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.emeraldPearl.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Emerald Pearl</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.imperialRed.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Imperial Red</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.whiteWave.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">White Wave</Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ImageContainer>
              <Img fluid={data.xanXiBlack.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Xan Xi Black</Typography>
          </Grid>
        </Grid>
      </ContainterLgMt>

      <ContainterSmMt>
        <ColourWarning />
      </ContainterSmMt>

      <ContainterMdMt>
        <MainCTA />
      </ContainterMdMt>
    </Layout>
  )
}

export default graniteSlab

export const data = graphql`
  query {
    bluepearlHero: file(relativePath: { eq: "blue-pearl-kitchentop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file(relativePath: { eq: "granite/black-galaxy.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bluePearl: file(relativePath: { eq: "granite/blue-pearl.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bourbonGrey: file(relativePath: { eq: "granite/bourbon-grey.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emeraldPearl: file(relativePath: { eq: "granite/emerald-pearl.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imperialRed: file(relativePath: { eq: "granite/imperial-red.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whiteWave: file(relativePath: { eq: "granite/white-wave.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    xanXiBlack: file(relativePath: { eq: "granite/xan-xi-black.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
