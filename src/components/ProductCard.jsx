import * as React from "react"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
    [theme.breakpoints.down("sm")]: {
      height: 180,
    },
  },
  linkStyle: {
    textDecoration: `none`,
  },
}))

export const ProductCard = ({
  stone,
  stoneDescription,
  imgSource,
  altText,
  linkURL,
}) => {
  const classes = useStyles()

  return (
    <Card
    // className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          component={Img}
          fluid={imgSource}
          alt={altText}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {stone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {stoneDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={linkURL} className={classes.linkStyle}>
          <Button size="large" color="primary">
            See Colour
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
