import React from 'react';
import Section from '../Section/SectionWithoutContainer';
import bannerLogo from '../../images/smiling_child.jpg';
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
    minHeight: '28rem',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.up('lg')]: {
      backgroundPositionY: '-3.5rem',
    },
  },
  title: {
    fontWeight: 500,
    color: 'white',
    textShadow: '1px 1.5px rgba(17,17,17,.7);',
    margin: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '28px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 4rem',
      textAlign: 'center',
      fontSize: '34px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0 4rem',
      textAlign: 'center',
      fontSize: '40px',
    },
    marginBottom: 0,
    position: "relative"
  },
  text: {
    color: 'white'
  }
});

function Banner(props) {
  const { classes, content } = props;
  return (
    <Section className={classes.root}>
      <div className={classes.container + ' ' + classes.bannerLogo}>
        <Typography className={classes.title} variant="h2">
          Saving for your child’s future is possible!
        </Typography>
      </div>
    </Section>
  );
}

export default withStyles(styles)(Banner);
