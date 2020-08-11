import * as React from "react"
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core"
import { blue, orange } from "@material-ui/core/colors"
import { Header, Footer } from "../components"

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
})

theme = responsiveFontSizes(theme)

export const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
