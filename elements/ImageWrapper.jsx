import { Paper, makeStyles } from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles(theme => ({
  paperStyles: {
    margin: theme.spacing(0, 0, 2),
  },
}))

export const ImageContainer = ({ children }) => {
  const classes = useStyles()

  return (
    <Paper elevation={4} className={classes.paperStyles}>
      {children}
    </Paper>
  )
}
