import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: '4rem'
  },
  cardMedia: {
    paddingTop: '56.25%',

  }
})

function Cards(props) {
  const classes = useStyles(props);
    return (
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={4}>
          {props.cardNumber.map(i => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title="Contemplative Reptile"
                      className={classes.cardMedia}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      VIEW
                    </Button>
                    <Button size="small" color="primary">
                      EDIT
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
}

export default Cards;
