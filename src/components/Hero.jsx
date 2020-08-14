import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import * as React from "react"

const useStyles = makeStyles(theme => ({
  filterLayer: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgba(0, 0, 0, 0.7)`,
  },
  anchorText: {
    textDecoration: `none`,
  },
  buttonStyles: {
    padding: theme.spacing(2, 5),
    letterSpacing: theme.spacing(0.75),
  },
}))

export const Hero = ({ title, subtitle, buttonText, idPath, imageSource }) => {
  const classes = useStyles()

  return (
    <BackgroundImage
      fluid={imageSource}
      style={{
        backgroundAttachment: `fixed`,
        backgrounPosition: `center center`,
        backgroundSize: `cover`,
        height: `90vh`,
      }}
    >
      <Grid
        direction="column"
        container
        justify="center"
        className={classes.filterLayer}
      >
        <Grid container item justify="center" alignItems="center">
          <Typography variant="h1" gutterBottom align="center" color="primary">
            <Box px={2}>{title}</Box>
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center">
          <Typography variant="h3" align="center">
            <Box pb={7} px={2} color="background.paper">
              {subtitle}
            </Box>
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center">
          <a href={`#${idPath}`} className={classes.anchorText}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.buttonStyles}
            >
              {buttonText}
            </Button>
          </a>
        </Grid>
      </Grid>
    </BackgroundImage>
  )
}
