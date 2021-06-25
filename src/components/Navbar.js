import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles({
    icon: {
        margin: '8px 4px',
    }
});

function Navbar(props) {
    const classes = useStyles(props);
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PhotoCameraIcon className={classes.icon} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar
