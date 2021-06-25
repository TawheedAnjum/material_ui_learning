import React from 'react';
import {
  Typography,
  Container,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
  },
  headerButton: {
      marginTop: "1.5rem"
  }
});


const Header = (props) => {
    const classes = useStyles(props);
    return (
      <React.Fragment>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          className={classes.root}
        >
          Album layout
        </Typography>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary" variant="h5">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </Typography>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.headerButton}
          >
            <Grid item>
              <Button variant="contained" color="primary" disableElevation>
                MAIN CALL TO ACTION
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                SECONDARY ACTION
              </Button>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
}

export default Header;
