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
    backgroundColor: '#FFF',
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
        <div className={classes.footer}>
          <div>
            <p>
            <b>For more information, contact:</b> <br/>
            <u><b>City of Toronto</b></u> <br/>
              Contact: 311 <br/>
              TTY: 416-0TTY (0889) <br />
              Website: <a href="https://www.toronto.ca/">Toronto.ca</a>
            </p>
          </div>
          <div>
            <p>
              <u><b>Canada Learning Bond/Federal Government</b></u> <br/>
              Contact: 1 800 O-Canada (1-800-622-6232) <br/>
              TTY Call Centre: 1-800-926-9105 <br />
              Website: <a href="https://www.canada.ca/en/employment-social-development/services/learning-bond.html">Canada.ca</a>
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default withStyles(styles)(Footer);
