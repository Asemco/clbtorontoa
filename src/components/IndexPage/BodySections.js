import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from '../Section';
import EscapedHtml from '../EscapedHtml';
import howItWorks1 from '../../images/howitworks01.svg';
import howItWorks2 from '../../images/howitworks02.svg';
import howItWorks3 from '../../images/howitworks03.svg';
import CLBCalc from '../../images/CLBCalc-en-US.png';
import './bodySections.css';
import { Typography, LinearProgress, Button, TextField, Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';

const axios = require('axios');

const styles = theme => ({
  formLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  labels: {
    paddingBottom: ".5rem"
  },
  valid: {
    color: "green"
  },
  centerText: {
    textAlign: "center"
  },
  invalid: {
    color: "red"
  },
  blue: {
    color: "#015994"
  },
  blueHeading: {
    color: "#015994",
    fontSize: "24px",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "32px",
    },
  },
  blueBYS: {
    color: "#015994",
    fontSize: "1.125rem"
  },
  padded: {
    padding: '2rem 1.5rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.5rem 4rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2.5rem 8rem',
    },
  },
  subheaderTitle: {
    color: "#015994",
    textAlign: "center",
    letterSpacing: "inherit",
    fontSize: "24px",
    [theme.breakpoints.up('md')]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "32px",
    },
  },
  iframe: {
    width: "100%",
    margin: "1rem 0",
    background: "white",
    minHeight: "43rem",
  },
  flexSteps: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: "2rem auto",
    maxWidth: "60rem",
    flexWrap: "wrap",
  },
  easyFlexSteps: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: "2rem auto",
    maxWidth: "50rem",
    flexWrap: "wrap",
    fontWeight: "300",
    lineHeight: "1.5"
  },
  beforeFlexSteps: {
    flex: "1",
    display: 'flex',
    flexDirection: 'row',
    textAlign: "left",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    margin: "2rem auto",
    maxWidth: "60rem",
  },
  flexStepsBlueBack: {
    display: 'flex',
    backgroundColor: '#015994',
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: "100vw",
    flexWrap: "wrap",
    paddingBottom: "20px",
    color: "white"
  },
  easyFlexStepDiv: {
    display: 'flex',
    width: '14rem',
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: "center"
  },
  easyFlexStepDivCaption: {
    margin: '1rem 0',
    textAlign: "center",
    width: '100%',
    fontWeight: '300',
    lineHeight: '1.6',
  },
  flexStepDiv: {
    display: 'flex',
    width: '20rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: "center"
  },
  flexDYKDiv: {
    display: 'flex',
    width: '33vh',
    flexDirection: 'column',
    justifyContent: 'start',
    flexWrap: 'wrap',
    textAlign: "center"
  },
  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: "center"
  },
  easyStepsContainer: {
    width: "100%",
    padding: "1rem",
    position: "relative",
    zIndex: "2",
    boxSizing: "border-box",
    marginTop: "-6rem",
    justifyContent: 'center',
  },
  easyStepsFlexDiv: {
    boxShadow: "0 0 16px rgba(0,0,0,.5)",
    boxSizing: "border-box",
    padding: "2.5rem",
    maxWidth: "70rem",
    margin: "0 auto",
    backgroundColor: "#fff",
  },
  beforeYouStartRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "60rem"
  },
  beforeYouStartColumn: {
    padding: "0",
    justifyContent: "center",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    flex: "1 1 0",
    boxSizing: "border-box"
  },
  clbFlexDiv: {
    display: 'flex',
    width: '30rem',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    textAlign: "center",

  },
  clbFlexDiv1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    textAlign: "left",
    padding: "2rem",
    lineHeight: "1.6",
    flex: "1 1 0"
  },
  clbFlexDiv2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    textAlign: "left",
    backgroundColor: "#feedc2",
    padding: "2rem",
    lineHeight: "1.6",
    flex: "1 1 0"
  }
});

class BodySections extends React.Component {
  /**
 * @description - Body Sections Component renders a list of sections if it exist.
 * There are multiple sections in en, so an if statement is controlling the components.
 * @param {Object} content - body section content, french and english
 * @param {string} locale - 'en' or 'fr'
 */
  constructor(props) {
    super(props);

  }

  render() {
    const { content, classes } = this.props;
    return (
      <>
      <Section className={classes.flexDiv}>
        <Typography variant="h2">
          <span className={classes.blueHeading}>
            <b>Families in the City of Toronto can start planning and saving early for their children's post-secondary education or training programs.</b>
          </span>
        </Typography>
      </Section>
      <Section id="ThreeEasySteps" className={classes.flexDiv}>
        <div className={classes.easyStepsContainer}>
          <div className={classes.easyStepsFlexDiv}>
            <Typography variant="h3" className={classes.subheaderTitle}>
              <b>3 Easy Steps</b>
            </Typography>
            <div className={classes.flexDiv}>
              <br/>
              <div className={classes.easyFlexSteps}>
                <div className={classes.easyFlexStepDiv}>
                  <img src={howItWorks1} />
                  <div className={classes.easyFlexStepDivCaption}>
                    <span>Open a no-cost RESP and apply for the Canada Learning Bond.</span>
                    <br/>
                    <span className={classes.blue}>Takes 10 minutes or less</span>
                  </div>
                </div>
                <div className={classes.easyFlexStepDiv}>
                  <img src={howItWorks2} />
                  <div className={classes.easyFlexStepDivCaption}>
                    <span>Connect with the financial institution you chose in Step 1 to complete the application process.</span>
                    <br/>
                    <span className={classes.blue}>Will take 1-2 weeks</span>
                  </div>
                </div>
                <div className={classes.easyFlexStepDiv}>
                  <img src={howItWorks3} />
                  <div className={classes.easyFlexStepDivCaption}>
                    <span>If eligible, receive your child's Canada Learning Bond into the RESP.</span>
                    <br/>
                    <span className={classes.blue}>Can take up to 2 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="StartTheProcess" className={classes.flexDiv}>
        <Typography variant="h3" className={classes.subheaderTitle}>
          <b>
            You can start the process of opening an RESP and requesting the Canada Learning Bond from the comfort of your own home! 
            <br />
            <br />
            When you apply online
            using our MySmartFUTURE application below, you will be able to select from a range of financial institutions 
            that offer their families at-home RESP access.
          </b>
        </Typography>
      </Section>
      <Section id="BeforeYouStart" className={classes.flexDiv}>
        <Typography variant="h2" className={classes.subheaderTitle}>
          <b>Before You Start</b>
        </Typography>
        <br/>
        <div className={classes.beforeFlexSteps}>
          <div className={classes.clbFlexDiv}>
            <div className={classes.clbFlexDiv1}>
              <span className={classes.blueBYS}><b>What is the Canada Learning Bond (CLB)?</b></span>
              <br/>
              <span>
              The Canada Learning Bond is a grant of $500 to $2,000 from the Federal Government of Canada 
              to help eligible families with the cost of their child’s education after high school. 
              The CLB is deposited directly into a Registered Education Savings Plan (RESP) for a child. 
              Use this application to request your child’s CLB at no cost!
              </span>
              <br />
              <div className={classes.beforeYouStartRow}>
                <div className={classes.beforeYouStartColumn}>
                  <span className={classes.blue}>
                    See how your child’s education savings could add up year by year! Try our <a href="https://www.smartsaver.org/startmyresp-calculator/#/main/en" target="_blank">online calculator.</a>
                  </span>
                </div>
                <div>
                  <span>
                    <a href="https://www.smartsaver.org/startmyresp-calculator/#/main/en" target="_blank"><img src={CLBCalc} /></a>
                  </span>         
                </div>
              </div>
            </div>
          </div>
          <div className={classes.clbFlexDiv}>
            <div className={classes.clbFlexDiv2}>
              <span className={classes.blueBYS}><b>Is my child eligible?</b></span>
              <br/>
              <span>A child is eligible for the CLB if they:</span>
              <ul>
                <li>were born on or after January 1, 2004</li>
                <li>are a resident of Canada</li>
                <li>have a valid <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank">Social Insurance Number</a> (SIN).</li>
                <li>are named in an RESP.</li>
              </ul>
              <span>Plus, the parent or guardian must:</span>
              <ul>
                <li>Have a net family income under $48,535*.</li>
                <li>Have a <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank">Social Insurance Number</a> (SIN).</li>
                <li>Have filed taxes for at least one of the years since the eligible child was born. (<a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program.html" target="_blank">Need help?</a>)</li>
                <li>For families with 1 to 3 children.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section noPadding id="DidYouKnow" className={classes.flexDiv}>
        <div className={classes.padded}>
          <Typography variant="h3" className={classes.subheaderTitle}>
            <b>
            Did you know? Children with education savings of up to $500 are 3 times more likely to enroll in post-secondary and 4 times more likely to graduate.
            </b>
          </Typography>
        </div>
        <div className={classes.flexDiv}>
          <div className={classes.flexStepsBlueBack}>
            <div className={classes.flexDYKDiv}>
              <h3><b>I am ready to apply!</b></h3>
              <span>
                Visit your local branch OR follow the instructions below to open 
                an RESP and request your child’s CLB with one of our partner 
                financial institutions. 
                <br />
                There is no cost to open an RESP.
              </span>
            </div>
            <div className={classes.flexDYKDiv}>
              <h3><b>I already opened an RESP!</b></h3>
              <span>
              Call 1-888-276-3624 to ask if your child already receives the CLB 
              into their RESP. 
              <br />
              If they don’t, contact your RESP provider to ask for assistance.
              </span>
            </div>
            <div className={classes.flexDYKDiv}>
              <h3><b>I need some help!</b></h3>
              <span>Call the Canada Education Savings Program government hotline at: 1-888-276-3624</span>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Typography variant="h3" className={classes.blueHeading}>
          <b>Start Saving Today for Your Child's Education Tomorrow!</b>
        </Typography>
        <span>
          <b>What do I need to open an RESP with the financial institution? (not required on the application)</b>
          <ol>
            <li>
              For the CLB you will need to have a Social Insurance Number (SIN) for you and for your child.
            </li>
          </ol>
        </span>
      </Section>
      <Section name="submit" id="submit">
        <Typography variant="h3" className={classes.subheaderTitle}>
          <b>I'm ready to apply!</b>
        </Typography>
        <br />
        <span>If you cannot see the application form, <a href="https://www.mysmartfuture.org/signup/TCS " target="_blank">click here</a>.</span>
        <iframe id="tcs" className={classes.iframe} src="https://www.mysmartfuture.org/signup/TCS" frameBorder="0" title="StartMyResp Application"></iframe>
      </Section>
      </>
    );
  }

}

export default withStyles(styles)(BodySections);
