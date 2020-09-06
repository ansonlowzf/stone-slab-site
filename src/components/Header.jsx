import * as React from "react"
import { useState } from "react"
import {
  AppBar,
  Container,
  Drawer,
  Fab,
  Toolbar,
  useScrollTrigger,
  IconButton,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
  Zoom,
} from "@material-ui/core"
import { Home, Menu, KeyboardArrowUp } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  toolbarContainer: {
    ...theme.mixins.toolbar,
  },
  homeIconStyle: {
    opacity: 0.7,
    color: theme.palette.common.white,
  },
  navbarDisplayStyles: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: "none",
    textTransform: `capitalize`,
    letterSpacing: theme.spacing(0.2),
    marginLeft: theme.spacing(5),
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  styleDrawer: {
    width: 250,
  },
  styleDrawerLink: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.common.black,
  },
  styleMenu: {
    color: theme.palette.common.white,
  },
  styleBackToTop: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    zIndex: 999,
    [theme.breakpoints.up("md")]: {
      bottom: theme.spacing(15),
      right: theme.spacing(20),
    },
  },
}))

const navLinks = [
  { title: `home`, path: `/` },
  { title: `caesarstone`, path: `/caesarstone-slab` },
  { title: `quartz stone`, path: `/quartz-stone-slab` },
  { title: `granite`, path: `/granite-slab` },
  { title: `tools`, path: `/fabrication-tools` },
  { title: `faq`, path: `/faq` },
]

export const Header = () => {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="lg" className={classes.navbarDisplayStyles}>
              <IconButton>
                <Link
                  to="/"
                  activeClassName="active"
                  className={classes.homeIconStyle}
                >
                  <Home fontSize="large" style={{ color: `white` }} />
                </Link>
              </IconButton>

              <Hidden smDown>
                <Toolbar component="nav" className={classes.mainNavStyles}>
                  {navLinks.map(({ title, path }, index) => (
                    <Typography key={`${title}${index}`} variant="button">
                      <Link
                        to={path}
                        activeClassName="active"
                        className={classes.linkText}
                      >
                        {title}
                      </Link>
                    </Typography>
                  ))}
                </Toolbar>
              </Hidden>

              <Hidden mdUp>
                <SideDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" className={classes.toolbarContainer} />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  )
}

export const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

// Back To Top Component
export const BackToTop = ({ children }) => {
  const classes = useStyles()
  const trigger = useScrollTrigger()
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.styleBackToTop}
      >
        {children}
      </div>
    </Zoom>
  )
}
// Side Drawer Component
export const SideDrawer = ({ navLinks }) => {
  const classes = useStyles()
  const [state, setState] = useState({ right: false })
  const toggleDrawer = (anchor, open) => event => {
    if (
      (event.type === "keydown" && event.key === "Tab") ||
      event.key === "Shift"
    ) {
      return
    }
    setState({ [anchor]: open })
  }
  const sideDrawerList = anchor => (
    <div
      className={classes.styleDrawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.styleDrawerLink}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" className={classes.styleMenu} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </>
  )
}
