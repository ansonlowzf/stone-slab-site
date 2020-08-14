import * as React from "react"
import { Layout } from "../components"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { FaqStoneDistributor } from "../../constant/faq"
import { ContainterSmMt, H2Title } from "../../elements/"

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: `0.5em 0`,
  },
}))

const Faq = () => {
  const classes = useStyles()

  return (
    <Layout>
      <H2Title useMarginTop>Frequently Ask Question</H2Title>
      <ContainterSmMt>
        {FaqStoneDistributor.map(({ question, answer }) => {
          return (
            <ExpansionPanel key={question}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{question}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{answer}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </ContainterSmMt>
    </Layout>
  )
}

export default Faq
