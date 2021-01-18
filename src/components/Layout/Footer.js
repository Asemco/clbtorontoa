import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Section from '../Section';
import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '15rem',
    backgroundColor: '#A9A9A9',
  },
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    fontWeight: '600',
    '& a:first-child': {
      marginRight: '1rem',
    },
    '& a + a': {
      margin: '0 1rem',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Section className={classes.section}>
        <div>
          <span><b>For more information, contact:</b></span>
        </div>
        <div className={classes.footer}>
          <div>
            <p> 
            <u><b>City of Toronto</b></u> <br/>
              Contact: 311 <br/>
              TTY: 416-0TTY (0889) <br />
              Website: <a href="https://www.toronto.ca/clb" target="_blank">Toronto.ca/clb</a>
            </p>
          </div>
          <div>
            <p>
              <u><b>Canada Learning Bond/Federal Government</b></u> <br/>
              Contact: 1 800 O-Canada (1-800-622-6232) <br/>
              TTY Call Centre: 1-800-926-9105 <br />
              Website: <a href="https://www.canada.ca/en/employment-social-development/services/learning-bond.html" target="_blank">Canada.ca</a>
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default withStyles(styles)(Footer);
