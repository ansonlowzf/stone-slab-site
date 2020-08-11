import * as React from "react"
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { Layout } from "../components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Hero } from "../components"
import { H2Title, H2Subtitle } from "../../elements"

const useStyles = makeStyles(theme => ({
  paperStyles: {
    margin: theme.spacing(0, 0, 2),
  },
}))

const CaesarstoneSlab = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Hero
        title="Caesarstone Distributor"
        subtitle="Supply Caesarstone Slab To Stone Factory &amp; Fabricator"
        buttonText="Explore"
        imageSource={data.calacattaNuvoHero.childImageSharp.fluid}
      />
      <Container maxWidth="md">
        <H2Title>Caesarstone Colour</H2Title>
        <H2Subtitle>All 32 Colours Available In Malaysia</H2Subtitle>
        <Grid container justify="center" spacing={5}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.pureWhite.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">1141 | Pure White</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.snow.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">2141 | Snow</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.jetBlack.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">3100 | Jet Black</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.freshConcrete.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4001 | Fresh Concrete</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.cloudburstConcrete.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4011 | Cloudburst Concrete</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.topusConcrete.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4023 | Topus Concrete</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.oyster.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4030 | Oyster</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.ruggedConcrete.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4033 | Rugged Concrete</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.airyConcrete.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4044 | Airy Concrete</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.raven.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4120 | Raven</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.clamshell.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4130 | Clamshell</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.buttermilk.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4220 | Buttermilk</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.shitake.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4230 | Shitake</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.ginger.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4330 | Ginger</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.mink.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4350 | Mink</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.organicWhite.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4600 | Organic White</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.frozenTerra.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">4601 | Frozen Terra</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.piatraGrey.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5003 | Piatra Grey</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.statuarioMaximus.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5031 | Statuario Maximus</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.montblanc.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5043 | Montblanc</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.vanillaNoir.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5100 | Vanilla Noir</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.calacattaNuvo.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5131 | Calacatta Nuvo</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.symphonyGrey.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5133 | Symphony Grey</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.frostyCarrina.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5141 | Frosty Carrina</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.whiteAttica.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">5143 | White Attica</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.intenseWhite.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6011 | Intense White</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.nordicLoft.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6041 | Nordic Loft</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.moorlandFog.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6046 | Moorland Fog</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.nightSky.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6100 | Night Sky</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.biancoDrift.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6131 | Bianco Drift</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.turbineGrey.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6313 | Turbine Grey</Typography>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Paper elevation={4} className={classes.paperStyles}>
              <Img fluid={data.woodlands.childImageSharp.fluid} />
            </Paper>
            <Typography align="center">6338 | Woodlands</Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default CaesarstoneSlab

export const data = graphql`
  query {
    pureWhite: file(relativePath: { eq: "classico-colour/cs1141.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snow: file(relativePath: { eq: "classico-colour/cs2141.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    jetBlack: file(relativePath: { eq: "classico-colour/cs3100.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    freshConcrete: file(relativePath: { eq: "classico-colour/cs4001.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloudburstConcrete: file(
      relativePath: { eq: "classico-colour/cs4011.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    topusConcrete: file(relativePath: { eq: "classico-colour/cs4023.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oyster: file(relativePath: { eq: "classico-colour/cs4030.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ruggedConcrete: file(relativePath: { eq: "classico-colour/cs4033.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    airyConcrete: file(relativePath: { eq: "classico-colour/cs4044.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    raven: file(relativePath: { eq: "classico-colour/cs4120.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clamshell: file(relativePath: { eq: "classico-colour/cs4130.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    buttermilk: file(relativePath: { eq: "classico-colour/cs4220.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shitake: file(relativePath: { eq: "classico-colour/cs4230.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ginger: file(relativePath: { eq: "classico-colour/cs4330.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mink: file(relativePath: { eq: "classico-colour/cs4350.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    organicWhite: file(relativePath: { eq: "classico-colour/cs4600.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frozenTerra: file(relativePath: { eq: "classico-colour/cs4601.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    piatraGrey: file(relativePath: { eq: "classico-colour/cs5003.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    statuarioMaximus: file(relativePath: { eq: "classico-colour/cs5031.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    montblanc: file(relativePath: { eq: "classico-colour/cs5043.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaNoir: file(relativePath: { eq: "classico-colour/cs5100.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calacattaNuvo: file(relativePath: { eq: "classico-colour/cs5131.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    symphonyGrey: file(relativePath: { eq: "classico-colour/cs5133.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frostyCarrina: file(relativePath: { eq: "classico-colour/cs5141.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whiteAttica: file(relativePath: { eq: "classico-colour/cs5143.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    intenseWhite: file(relativePath: { eq: "classico-colour/cs6011.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nordicLoft: file(relativePath: { eq: "classico-colour/cs6041.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moorlandFog: file(relativePath: { eq: "classico-colour/cs6046.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nightSky: file(relativePath: { eq: "classico-colour/cs6100.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    biancoDrift: file(relativePath: { eq: "classico-colour/cs6131.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    turbineGrey: file(relativePath: { eq: "classico-colour/cs6313.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    woodlands: file(relativePath: { eq: "classico-colour/cs6338.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calacattaNuvoHero: file(relativePath: { eq: "calacatta-nuvo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
