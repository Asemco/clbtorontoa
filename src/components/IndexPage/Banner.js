import React from 'react';
import Section from '../Section';
import bannerLogo from '../../images/anetas-son-overlay.jpg';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: '3rem',
    padding: 0,
  },
  container: {
    maxWidth: theme.breakpoints.values.xl,
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.75rem 4rem',
    },
  },
  bannerLogo: {
    background: `url(${bannerLogo}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '38rem',
    [theme.breakpoints.up('md')]: {
      backgroundPositionY: '-4rem',
    },
  },
  title: {
    color: 'white',
    textShadow: '1px 1.3px rgba(17,17,17,.7);',
    margin: '0 1rem',
    [theme.breakpoints.up('md')]: {
      margin: '0 4rem',
      textAlign: 'center',
    },
  },
});

function Banner(props) {
  const { classes, content } = props;
  return (
    <Section className={classes.root}>
      <div className={classes.container + ' ' + classes.bannerLogo}>
        <Typography className={classes.title} variant="h2">
          {content.title}
        </Typography>
      </div>
    </Section>
  );
}

export default withStyles(styles)(Banner);
