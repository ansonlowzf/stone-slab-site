import * as React from "react"
import { Layout, Hero, MainCTA, SEO, ProductCard } from "../components"
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { graphql } from "gatsby"
import { ContainterMdMt, ContainterSmMt, H2Title } from "../../elements"

const useStyles = makeStyles(theme => ({
  videoStyle: {
    position: `relative`,
    width: `100%`,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 390,
    },
  },
}))

const Homepage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Stone Distributor Malaysia" />
      <Hero
        title="Stone Distributor Malaysia"
        subtitle="Specializing In Stone Slab Distribution"
        buttonText="Explore"
        toId="distributor"
        imageSource={data.wideAngleFactory.childImageSharp.fluid}
      />
      <ContainterSmMt>
        <H2Title idPath="distributor">About Us</H2Title>
        <Typography gutterBottom>
          {`We import the following stone slab from China, Spain, & US and distribute in Malaysia.`}
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Natural Stone - Granite, Marble, Agate Stone" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Engineered Stone - Quartz Stone, Porcelain Slab, Ultra-Compact Stone" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Fabrication Tools - Polisher, Marble Glue" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Machines Tools - Cutter Blade" />
          </ListItem>
        </List>
        <Typography paragraph>
          {`With more than 800 stone slabs ready-stock in our Klang Valley's warehouse.
          Check out factory video to see our ready-stock stone material.`}
        </Typography>
        <Typography component="p" variant="h6">
          {`Grow Your Stone Business With Us`}
        </Typography>
      </ContainterSmMt>

      <ContainterMdMt>
        <H2Title>Warehouse</H2Title>
        <Paper elevation={4}>
          <Grid container justify="center">
            <iframe
              title="stone distributor warehouse walkthrough"
              className={classes.videoStyle}
              src="https://www.youtube.com/embed/n_aPfgbuSDA"
              scrolling="no"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullFcreen
            ></iframe>{" "}
          </Grid>
        </Paper>
      </ContainterMdMt>

      <ContainterMdMt>
        <H2Title>Stone Types</H2Title>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard
              stone="Granite"
              linkURL="/granite-slab"
              stoneDescription="7 popular shades to choose from"
              imgSource={data.bluePearl.childImageSharp.fluid}
              altText="Granite Blue Pearl"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard
              stone="Quartz Stone"
              linkURL="/quartz-stone-slab"
              stoneDescription="More than 60 colour to choose from"
              imgSource={data.q3015.childImageSharp.fluid}
              altText="Quartz Stone"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard
              stone="Caesarstone"
              linkURL="/caesarstone-slab"
              stoneDescription="More than 32 colour to choose from"
              imgSource={data.cs6046.childImageSharp.fluid}
              altText="Caesarstone"
            />
          </Grid>
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
    bluePearl: file(relativePath: { eq: "granite/blue-pearl.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cs6046: file(relativePath: { eq: "classico-colour/cs6046.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q3015: file(relativePath: { eq: "oem-qs/Q3015.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
