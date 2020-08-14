import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const Footer = () => {
  return (
    <Box
      component="footer"
      py={5}
      mt={{ xs: 10, sm: 13, md: 15 }}
      bgcolor="primary.main"
    >
      <Typography align="center">
        <Box color="background.paper">
          © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
        </Box>
      </Typography>
    </Box>
  )
}
