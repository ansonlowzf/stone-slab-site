import { Container, makeStyles } from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles(theme => ({
  containerMt: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
    },
  },
}))

export const ContainterLgMt = ({ children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.containerMt}>
      {children}
    </Container>
  )
}

export const ContainterMdMt = ({ children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.containerMt}>
      {children}
    </Container>
  )
}

export const ContainterSmMt = ({ children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.containerMt}>
      {children}
    </Container>
  )
}
