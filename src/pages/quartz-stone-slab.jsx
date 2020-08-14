import * as React from "react"
import { Layout, Hero, ColourWarning, MainCTA, SEO } from "../components"
import { Grid, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  ContainterLgMt,
  ContainterSmMt,
  ContainterMdMt,
  ImageContainer,
  H2Title,
} from "../../elements"

const QuartzStoneSlab = ({ data }) => {
  return (
    <Layout>
      <SEO title="Quartz Stone Slab" />
      <Hero
        title="Quartz Stone Slab"
        subtitle="More Than 60 Colours &amp; 800 Slabs Ready Stock"
        buttonText="Explore"
        imageSource={data.calacattaZen.childImageSharp.fluid}
      />
      <ContainterLgMt>
        <H2Title>Colour Options</H2Title>
        <Grid container spacing={2} justify="center">
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q3015.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q3015</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q4015.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q4015</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q101503.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101503</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q101509.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101509</Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q101510.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101510</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q101511.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101511</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q101523.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101523</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q201501.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q201501</Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q201504.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q201504</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q201505.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q201505</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q201541.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q201541</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q401501.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q401501</Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q601501.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601501</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q601503.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601503</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q601505.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601505</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <ImageContainer>
              <Img fluid={data.q601509.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601509</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101506.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101506</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101508.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101508</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101521.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101521</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101522.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101522</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101524.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101524</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101525.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101525</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101526.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101526</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q101528.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q101528</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q601502.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601502</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q601507.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q601507</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q702001.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q702001</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q702003.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q702003</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q702005.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q702005</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q702011.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q702011</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q801501.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q801501</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q801534.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q801534</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q801501slab.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q801501</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802021.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802021</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802022.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802022</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802023.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802023</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802025.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802025</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802026.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802026</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Img fluid={data.q802027.childImageSharp.fluid} />
            </ImageContainer>
            <Typography align="center">Q802027</Typography>
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

export default QuartzStoneSlab

export const data = graphql`
  query {
    calacattaZen: file(relativePath: { eq: "calacatta-zen.jpg" }) {
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
    q4015: file(relativePath: { eq: "oem-qs/Q4015.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101503: file(relativePath: { eq: "oem-qs/Q101503.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101509: file(relativePath: { eq: "oem-qs/Q101509.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101510: file(relativePath: { eq: "oem-qs/Q101510.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101511: file(relativePath: { eq: "oem-qs/Q101511.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101506: file(relativePath: { eq: "oem-qs/Q101506.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101508: file(relativePath: { eq: "oem-qs/Q101508.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101521: file(relativePath: { eq: "oem-qs/Q101521.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101522: file(relativePath: { eq: "oem-qs/Q101522.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101524: file(relativePath: { eq: "oem-qs/Q101524.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101525: file(relativePath: { eq: "oem-qs/Q101525.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101526: file(relativePath: { eq: "oem-qs/Q101526.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101528: file(relativePath: { eq: "oem-qs/Q101528.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601502: file(relativePath: { eq: "oem-qs/Q601502.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601507: file(relativePath: { eq: "oem-qs/Q601507.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q702001: file(relativePath: { eq: "oem-qs/Q702001.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q702003: file(relativePath: { eq: "oem-qs/Q702003.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q702005: file(relativePath: { eq: "oem-qs/Q702005.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q702011: file(relativePath: { eq: "oem-qs/Q702011.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q801501: file(relativePath: { eq: "oem-qs/Q801501.JPEG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q801534: file(relativePath: { eq: "oem-qs/Q801534.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q101523: file(relativePath: { eq: "oem-qs/Q101523.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q201501: file(relativePath: { eq: "oem-qs/Q201501.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q201504: file(relativePath: { eq: "oem-qs/Q201504.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q201505: file(relativePath: { eq: "oem-qs/Q201505.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q201541: file(relativePath: { eq: "oem-qs/Q201541.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q401501: file(relativePath: { eq: "oem-qs/Q401501.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601501: file(relativePath: { eq: "oem-qs/Q601501.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601503: file(relativePath: { eq: "oem-qs/Q601503.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601505: file(relativePath: { eq: "oem-qs/Q601505.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q601509: file(relativePath: { eq: "oem-qs/Q601509.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q801501slab: file(relativePath: { eq: "oem-qs/Q801501slab.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802021: file(relativePath: { eq: "oem-qs/Q802021.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802022: file(relativePath: { eq: "oem-qs/Q802022.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802023: file(relativePath: { eq: "oem-qs/Q802023.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802025: file(relativePath: { eq: "oem-qs/Q802025.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802026: file(relativePath: { eq: "oem-qs/Q802026.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    q802027: file(relativePath: { eq: "oem-qs/Q802027.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
