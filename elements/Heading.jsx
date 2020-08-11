import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const H2Title = ({ children }) => {
  return (
    <Box mb={6} align="center">
      <Typography
        variant="h2"
        align="center"
        display="inline"
        gutterBottom
        style={{ borderBottom: `2px solid grey` }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export const H2Subtitle = ({ children }) => {
  return (
    <Box mb={5} pb={3} align="center">
      <Typography
        component="h3"
        variant="h6"
        align="center"
        color="textSecondary"
      >
        {children}
      </Typography>
    </Box>
  )
}
