import { Avatar, Box, Typography, Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { H2Title } from "../../elements"

export const MainCTA = () => {
  const data = useStaticQuery(graphql`
    query {
      ansonLow: file(relativePath: { eq: "ansonlowzf.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Box align="center" py={4} px={3}>
      <H2Title>Quotation &amp; Inquiries</H2Title>
      <Avatar style={{ width: 150, height: 150, marginBottom: 40 }}>
        <Img fixed={data.ansonLow.childImageSharp.fixed} alt="Anson Low" />
      </Avatar>
      <Typography component="p" variant="h6" align="center" paragraph>
        {`Call / WhatsApp - Anson Low`}
      </Typography>
      <Typography component="p" variant="h6" align="center" paragraph>
        <a href="tel:+60168262314">016-8262 314</a>
      </Typography>

      <Typography component="p" variant="body1" paragraph align="center">
        Warehouse Location: Kampung Baru Sungai Buloh, Selangor
      </Typography>
    </Box>
  )
}
